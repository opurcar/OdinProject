const fs = require('node:fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.log('Error al leer el directorio', err)
        return
    } else {
        files.forEach(file => {
            console.log(file)
        })
    }
})

// se puede usar fs.stat para ver si un fichero existe o no