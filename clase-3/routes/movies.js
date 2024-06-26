import { randomUUID } from 'node:crypto'
import { Router } from 'express'
import { readJSON } from '../utils.js'
import { validateMovie, valdatePartialMovie } from '../schemas/movies.js'

export const moviesRouter = Router()
const movies = readJSON('./movies.json')

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev'
]

moviesRouter.get('/', (req, res) => {
  const origin = req.header('origin')// Recuperamos del CORS, quien nos esta solicitando acceso

  // Si esta en mi lista de acceptados o si no tiene origin, ya que puede tratarse de un acceso del mismo localhost
  // Cuando es el mismo, no envia el CORS (Access-Control-Allow-Origin) en el header
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    // Esta parte es para decir a quien le damos acceso, ya sea a todos "*" o un "localhost:8080"
    res.header('Access-Control-Allow-Origin', origin)
  }

  const { genre } = req.query // Puede capturar todos los querys en el path
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

moviesRouter.get('/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ mesagge: 'Movie not found' })
})

moviesRouter.post('/', (req, res) => {
  const result = validateMovie(req.body)

  // Si hubo un error al validar la pelicula, termina la ejecucion
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // La pelicula esta formateada correctamente, entonces se añade el resto de los campos con "...result.data"
  const newMovie = {
    id: randomUUID(), // UUID v4 Universal Unique Identifier
    ...result.data
  }

  // Esto no seria REST, porque estamos guardando el estado de la app en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie) // Devolviendo el objecto actualizamos la cache del cliente
})

moviesRouter.delete('/:id', (req, res) => {
  const origin = req.header('origin')

  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Movie deleted' })
})

moviesRouter.patch('/:id', (req, res) => {
  const result = valdatePartialMovie(req.body)
  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    // Aca le decimos que añada todos los datos que ya tenia la pelicula
    ...movies[movieIndex],
    // Aca le decimos que añada el campo modificado
    ...result.data
  }

  movies[movieIndex] = updateMovie
  return res.json(updateMovie)
})

moviesRouter.options('/:id', (req, res) => {
  const origin = req.header('origin')

  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  }

  res.sendStatus(200)
})
