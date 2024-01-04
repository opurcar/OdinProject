// Los ES Modules si que permitirían hacer await dentro de una función.

const { readFile } = require('fs/promises');


( async () => {
    console.log("Leyendo el primer archivo");
    const text = await readFile('./holaMundo.txt', 'utf-8'); // el await va antes del metodo, no de const
    console.log(text);
    console.log("Hacer cosas mientras lee el primer fichero");
    console.log("Leyendo el segundo archivo");
    const text2 = await readFile('./holaMundo2.txt', 'utf-8'); 
    console.log(text2);
})()





