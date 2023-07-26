//APP que muestra la info del sistema operativo. Usando el modulo "os"

const os = require('node:os')

console.log("Info del SO: ")
console.log("------------------------------------")

console.log("Nombre del Sistema operativo", os.platform())
console.log("Version del Sistema operativo", os.release())
console.log("Arquitectura", os.arch())
console.log("CPUs", os.cpus()) //Vamos a poder escalar procesos en Node
console.log("Memoria libre", os.freemem() / 1024 / 1024) //Dividido dos veces para obtener el resulado en megas
console.log("Memoria total", os.totalmem() / 1024 / 1024)
console.log("Uptime", os.uptime() / 60 / 60)