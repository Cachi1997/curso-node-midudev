const { readFile } = require('node:fs/promises')

//Aca le decimos, lee los dos archivos y cuando termines de leerlos, sigue con la ejecucion, no importa 
//quien termine primero
Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Primer texto: ', text)
  console.log('Segundo texto: ', secondText)
})