const fs = require('node:fs'); // Importa el módulo fs


console.log("Leyendo el primer archivo")

fs.readFile('./holaMundo.txt', 'utf-8', (err, data) => { // El callback se añade como tercer argumento, seguido de if y else
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log("Hacer cosas mientras lee el primer fichero")

console.log("Leyendo el segundo archivo")

fs.readFile('./holaMundo2.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// Si ejecutamos este código, primeroi leera los ficheros y hará cosas, y después ejecutará los callback. Esto es así porque el callback se ejecuta cuando el archivo se ha leído, pero el código no se detiene a esperar a que se lea el archivo.