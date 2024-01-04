// import {os} from 'os'; -> only works for ES6

const os = require('node:os'); // node: is required for core modules

console.log( 'Información del sistema operativo');
console.log('-----------------------------------');

console.log('Nombre del sistema operativo', os.platform());
console.log('Versión del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs', os.cpus())
console.log('Memoria total', os.totalmem()/ 1024 / 1024 / 1024)
console.log('Tiempo encendido', os.uptime()/ 60 / 60)