// const { promisify} = require('node:util'); // Importa el módulo util, solo para MODULOS QUE NO TENGAN PROMESAS NATIVAS
// const readFilePromise = promisify(fs.readFile); // Crea una versión promisificada de la función readFile

const fs = require('node:fs/promises'); // Importa el módulo fs


console.log("Leyendo el primer archivo")

fs.readFile('./holaMundo.txt', 'utf-8').then((data) => { 
    console.log(data)
})

console.log("Hacer cosas mientras lee el primer fichero")

console.log("Leyendo el segundo archivo")

fs.readFile('./holaMundo2.txt', 'utf-8').then((data) => {
    console.log(data)
})

// Si ejecutamos este código, primeroi leera los ficheros y hará cosas, y después ejecutará los callback. Esto es así porque el callback se ejecuta cuando el archivo se ha leído, pero el código no se detiene a esperar a que se lea el archivo.