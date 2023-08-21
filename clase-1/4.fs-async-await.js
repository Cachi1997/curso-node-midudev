// Con CommonJS se soluciona con algo que se llama "Funcion autoinvocada"
const { readFile } = require('node:fs/promises')

// Esta funcion autoinvocada se llama IIFE - Inmediatly Inviked Function Expression
// El punto y coma es para separar el require del resto del codigo, porque javascript interpreta algo que no es
;(
  async () => {
    const text = await readFile('./archivo.txt', 'utf-8') // Aunque sea asincrona, se queda esperando a que termine esto
    console.log('Primer texto: ', text)

    console.log('Hacer cosas mientras busca el archivo...')

    console.log('Leyendo el segundo archivo..')
    const secondText = await readFile('./archivo2.txt', 'utf-8') // Despues ejecuta esto
    console.log('Segundo texto: ', secondText)
  }
)()

// Lo de arriba es lo mismo que haber echo esto:

// async function init (){
// 	const text = await readFile('./archivo.txt', 'utf-8')
// 	console.log('Primer texto: ', text)

// 	console.log("Hacer cosas mientras busca el archivo...")

// 	console.log('Leyendo el segundo archivo..')
// 	const secondText = await readFile('./archivo2.txt', 'utf-8')
// 	console.log('Segundo texto: ', secondText)
// }

// init()
