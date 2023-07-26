//Esto es una forma vieja de hacer promises, en el caso de que usemos una version vieja de node
// const fs = require('node:fs')
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log("")
console.log('Leyendo el primer archivo..')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto: ', text)
  })

console.log("Hacer cosas mientras busca el archivo...")

console.log('Leyendo el segundo archivo..')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto: ', text)
  })
