const http = require('node:http') // Protocolo http
const fs = require('node:fs')

const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // Ok
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/imagen') {
    fs.readFile('./yoo.png', (err, data) => {
      if (err) {
        res.statusCode(500)
        res.end('<h1>500 Internal server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // Ok
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not found
    res.end('<h1>404</h1>')
  }
}

// El servidor solo puede hacer dos cosas, recibir una peticion o devolver una respuesta
const server = http.createServer(processRequest)

// Aca indicamos donde tiene que escuchar el servidor
server.listen(desirePort, () => {
  console.log(`Server listening on port http://localhost:${desirePort}`)
})
