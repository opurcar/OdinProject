// PROCESS ES UN OBJETO GLOBAL QUE NOS DA INFORMACIÓN DEL PROCESO EN EL QUE ESTAMOS

// argumentos de entrada

console.log(process.argv[2]) // devuelve un array con los argumentos de entrada

// process.argv nos permite configurar todo el proceso de node

//podemos salir de un proceso con process.exit()

// process.exit(1) // sale del proceso con un código de error 1

// podemos controlar eventos del proceso con process.on()

// process.on('exit', () => {
//     console.log('El proceso va a terminar')
// })

// current working directory
console.log(process.cwd()) // nos dice en qué directorio estamos

//platform
console.log(process.platform) // nos dice en qué plataforma estamos
console.log(process.env) // nos dice las variables de entorno   