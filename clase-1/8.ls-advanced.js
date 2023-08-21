const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// Si no hay argumentos, usamos "."
const folder = process.argv[2] ?? '.'

// Formas de hace lo de la linea 4
// const folder = process.argv[2] ? process.argv[2] : "."

// let folder = ""
// if(process.argv[2] !== null){
// folder = process.argv[2]
// }else{
// folder = '.'
// }

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)// Devuelve un arreglo con todos los archivos del directorio
  } catch (error) {
    console.log(pc.red(`No se pudo leer el directorio ${error}`))
    process.exit(1)
  }
  // EL map con el async mapea todas las promesas a la vez
  const filesPromises = files.map(async file => { // Recuperamos en paralelo todos los archivos del fichero
    const filePath = path.join(folder, file) // Une el directorio pasado por parametro con el archvio dentro de file
    let stats
    try {
      stats = await fs.stat(filePath)// El stat te da la informacion del archivo
    } catch (error) {
      console.log(`No se pudo leer el directorio ${error}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory() // Preguintamos si es un directorio
    const fileType = isDirectory ? 'd' : 'f' // Tipo de archivo
    const fileSize = stats.size // Tamaño del archivo
    const fileModified = stats.mtime.toLocaleDateString() // Cuando se modifico el archivo

    console.log('')
    // padEnd(20) indica que siempre ocupe 20 espacios, padStart(10) para que deje la sepacion de lo que ocupa pero al principio
    return `${pc.white(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified.padStart(10))}`
  })

  const filesInfo = await Promise.all(filesPromises)// Recibe un arreglo de promesas, y espera a que llegue cada una

  console.log('Type'.padEnd(5), 'File'.padEnd(35), 'Size'.padStart(5), 'Modified'.padStart(9))
  console.log('')
  filesInfo.forEach(fileInfo => console.log(fileInfo))
  console.log('')
}

// .then(files => {
// files.forEach(file => {
// const filePath = path.join(folder, file) //Ruta del fichero que vamos a listar al leer el directorio
// fs.stat(filePath)
// })
// })
// //si no "catcheamos" el error va a pasar process.exit(1) y se el programa se rompe
// .catch(err => {
// console.error('Error al leer el directorio: ', err)
// return;
// })
// }

ls(folder)

// Tareas
// añadir mas opciones
// Mostrar mas informacion
// como diferenciar archivos ocultos de archivos normales
// cambiar los colores de los ocultos
