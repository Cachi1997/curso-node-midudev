const fs = require('node:fs')

//Con el punto le decimos que lea el directorio actual
fs.readdir('.', (err, files) => {
  if(err){
		console.error('Error al leer el directorio: ', err)
		return;
	}

	files.forEach(file => {
		console.log(file)
	})
})

// const fs = require('node:promise')

//Los mismo pero con un try catch
// fs.readdir('.')
//   .then(files => {
// 		files.forEach(file => {
// 			console.log(file)
// 		})
// 	})
// 	.catch(err => {
// 		console.error('Error al leer el directorio: ', err)
// 		return;
// 	})