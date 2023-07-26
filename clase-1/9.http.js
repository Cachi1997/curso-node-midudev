const http = require('node:http') // Protocolo http
const { findAvailablePort } = require('./10.free-port')

const desirePort = process.env.PORT ?? 3000
// El servidor solo puede hacer dos cosas, recibir una peticion o devolver una respuesta
const server = http.createServer((req, res) => {
  console.log('request recieved')
  res.end('Hola mundo')
})

findAvailablePort(desirePort).then(port => {
  // Aca indicamos donde tiene que escuchar el servidor
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
