const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()
const PORT = process.env.PORT ?? 1234

// Desactivamos esta info en el header porque no es muy seguro y ahorramos bytes de procesamiento
app.disable('x-powered-by')

app.use(express.json()) // Esto es lo que hace todo lo de abajo

// Middleware. IMPORTANTE PONER EL NEXT PARA QUE CONTINUE LA EJECUCIÓN
// app.use((req, res, next) => {
//   // Trackear la request a la base de datos
//   // Revisar si el usuario tiene cookies
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // Solo llega request que son "POST" y que tienen el header Content-Type: application/json
//   let body = ''
//   // Escuchar el evento data
//   req.on('data', chunk => {
//     // Los chunks son "trozos" de datos que van llegando", porque es un buffer de datos
//     body += chunk.toString()
//   })

//   // Esto indica cuando termino de enviar datos el chunk
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // // res.end(JSON.stringify(data)) asi se hace en node
//     // res.status(201).json(data) // asi se hace en express

//     // Dentro del middleware vamos a mutar la request y meter la info en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/', (req, res) => {
  res.send('<h1>Mi Página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// Forma global de tratar todas las request (get, post, delete, etc) y esto siempre va a lo ultimo
// porque primero va intentar entrar por las otras request
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
