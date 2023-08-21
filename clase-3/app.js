const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')

const app = express()
app.use(express.json()) // Middleware
app.disable('x-powered-by')

// Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query // Puede capturar todos los querys en el path
  if(genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if(movie) return res.json(movie)

  res.status(404).json({ mesagge: 'Movie not found'})
})

app.post('/movies', (req, res) => {

  const {
    title,
    year,
    director,
    duration,
    poster,
    genre,
    rate
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(), //UUID v4 Universal Unique Identifier 
    title,
    year,
    director,
    duration,
    poster,
    genre,
    rate: rate ?? 0 // Si hay un rate se coloca, si no 0
  }

  // Esto no seria REST, porque estamos guardando el estado de la app en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie) // Devolviendo el objecto actualizamos la cache del cliente
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})