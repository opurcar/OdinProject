import { readFile } from 'fs/promises';


Promise.all([   // Promise.all() permite ejecutar varias promesas en paralelo
    readFile('./holaMundo.txt', 'utf-8'),
    readFile('./holaMundo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log(text);
    console.log(secondText);
});



