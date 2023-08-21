const path = require('node:path')

// Barra separadora de carpetas segun SO
// console.log(path.sep)

// Unir rutas con path.json. Esto hace que cree una ruta añadiendo la barra automaticamente segun el SO
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Devuelve el nombre de lo ultimo que esta en el path
const base = path.basename('/cachi/carpeta/archivo.txt')
// console.log(base)

// Lo mismo pero indicamos que le quite la extension
const fileName = path.basename('/cachi/carpeta/archivo.txt', '.txt')
// console.log(fileName)

// Devuelve la extension del fichero
const extension = path.extname('image.jpg')
