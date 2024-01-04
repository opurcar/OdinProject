const fs = require('node:fs');

const stats = fs.statSync('./holaMundo.txt'); // Síncrono

console.log(
    stats.isFile(), // Es un archivo?
    stats.isDirectory(), // Es un directorio?
    stats.isSymbolicLink(), // Es un enlace simbólico?
    stats.size, // Tamaño del archivo
    stats.atime, // Fecha de último acceso
    stats.mtime, // Fecha de última modificación
    stats.ctime, // Fecha de último cambio de estado
    stats.birthtime // Fecha de creación
);
// Muestra los datos del archivo



