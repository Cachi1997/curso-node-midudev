const fs = require('node:fs') //SIempre poner node: para requerir un modulo. fs significa filesystem

const stats = fs.statSync('./archivo.txt')

console.log(
	stats.isFile(), //Si es un fichero
	stats.isDirectory(), //Si es un directorio
	stats.isSymbolicLink(), //Si es un enlace simbolico
	stats.size, // Tamaño en bytes
)