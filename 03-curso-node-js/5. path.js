const path = require('node:path');

// unir rutas con path.join

// JAMAS UNIR RUTAS CON \ O /, SIEMPRE USAR path.join

console.log(path.sep) // separador de rutas según el sistema operativo

const pathArchivo = path.join('carpeta', 'subcarpeta', 'archivo.txt');

console.log(pathArchivo) // esto me crea el path sea cual sea el sistema operativo

const base = path.basename(path.join('carpeta', 'subcarpeta', 'archivo.txt'), '.txt')  

console.log(base)

const extensión = path.extname(path.join('carpeta', 'subcarpeta', 'archivo.txt'))

console.log(extensión)