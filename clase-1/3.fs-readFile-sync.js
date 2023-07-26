const fs = require('node:fs')

/*Forma sincrona de leer los archivos */

console.log("")
console.log('Leyendo el primer archivo..')
//Indicamos el archivo a leer, y la codificaion, si no ponenmos la codificacion por defecto envia in buffer con datos
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)
console.log("")

console.log('Leyendo el segundo archivo..')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondText)
console.log("")

/********************************/