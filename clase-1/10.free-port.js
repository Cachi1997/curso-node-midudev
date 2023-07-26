const net = require('node:net') // Protocolo net

// Funcion que encuentra un puerto disponible
function findAvailablePort (desirePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desirePort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // El puerto 0 automaticamente encuentra el primer puerto disponible
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
