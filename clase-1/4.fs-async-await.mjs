import { readFile } from 'node:fs/promises'

//EL problema aca es que no se puede usar el await solo ej:
//const text = await readFile('./archivo.txt', 'utf-8')
//console.log('Primer texto: ', text)
//Entonces hay dos soluciones posar el .js a .mjs. Esta solucion es valida ya que el ES modules tiene el soporte de usar
//el await en el cuerpo del archivo, esto se llama "Top level Await", en CommonJS no se puede hacer de esta forma

const text = await readFile('./archivo.txt', 'utf-8')
console.log('Primer texto: ', text)

console.log("Hacer cosas mientras busca el archivo...")

console.log('Leyendo el segundo archivo..')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto: ', secondText)