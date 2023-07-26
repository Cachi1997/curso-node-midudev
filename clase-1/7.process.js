//  Leer argumentos de entrada
//  console.log(process.argv)

//  Controlar el proceso y su salida.
//  0 indica que todo a salido bien y debe finalizar
//  1 indica que algo salio mal y debemos finalizar el proceso
//  process.exit(0)

//  Podemos controlar eventos del proceso. Con exit indicamos que hacer cuando sucede el evento "exit"
// process.on('exit', () => {
//   //Limpiar recursos
// //Limpiar consola
// })

//  current working directory: indica desde que carpeta estamos ejecutando el proceso
//  console.log(process.cwd())

//  Platform
//  process.env son las variables de entorno
console.log(process.env.PEPITO)
