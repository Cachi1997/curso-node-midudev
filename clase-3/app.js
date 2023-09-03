import express, { json } from 'express'
// import cors from 'cors'
import { moviesRouter } from './routes/movies.js'

const app = express()
app.use(json()) // Middleware

// Utilizando la libreria cors podemos hacer asi:
// app.use(cors({
//   origin: (origin, callback) => {
//     const ACCEPTED_ORIGINS = [
//       'http://localhost:8080',
//       'http://localhost:1234',
//       'https://movies.com',
//       'https://midu.dev'
//     ]

//     if(ACCEPTED_ORIGINS.includes(origin)){
//       return callback(null, true)
//     }

//     if(!origin){
//       return callback(null, true)
//     }
//   }
// }))

app.disable('x-powered-by')

// Todos los recursos que sean MOVIES se identifica con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
