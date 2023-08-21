const fs = require('node:fs')

console.log('')
console.log('Leyendo el primer archivo..')
// De esta forma utilizamos el callback, que esto es una forma de decile a javascript que, leea el archivo, lo codifique
// y ejecute el console.log, pero la direncia es que con el callback le decirmo que puede realizar otras tareas hasta
// que termine de buscar, codificar y leer el archivo, es decir, es una tarea asincrona, mientras haces esto, podes ir
// completando otras tareas, cuando termine de completar esta tarea te voy a avisar
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //
  console.log('Primer archivo: ', text)
})

console.log('Hacer cosas mientras busca el archivo...')

console.log('Leyendo el segundo archivo..')
const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => {
  console.log('Segundo archivo ', secondText)
})

// writeFile
// apendFile
// copyFile
// unlink
// ¿Que pasa si primero creo un archivo, lo renombro y luego hago un append del contenido?
