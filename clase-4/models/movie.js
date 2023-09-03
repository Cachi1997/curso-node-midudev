import { randomUUID } from 'crypto'
import { readJSON } from '../utils.js'

const movies = readJSON('./movies.json')

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static async getById ({ id }) {
    const movie = movies.find(movie => movie.id === id)
    return movie
  }

  static async create ({ input }) {
    const newMovie = {
      id: randomUUID(), // UUID v4 Universal Unique Identifier
      ...input
    }

    // Esto no seria REST, porque estamos guardando el estado de la app en memoria
    movies.push(newMovie)

    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = await movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies[movieIndex] = {
      // Aca le decimos que añada todos los datos que ya tenia la pelicula
      ...movies[movieIndex],
      // Aca le decimos que añada el campo modificado
      ...input
    }
    return movies[movieIndex]
  }
}
