const fs = require('fs'); // Se importa el módulo de File System
const colors = require('colors');

//El callback es una función que se envía como parámetro a otra función, la cual se ejecuta cuando todo el proceso de la función principal termina.
const crearArchivo = async (base = 1, listar = false, hasta = 12) => {

    try {
        let salida = '';
        let consola = '';

        consola += '==================\n'.green;
        consola += `   Tabla del: ${base}\n`;
        consola += '==================\n'.green;

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {
            console.log(consola);
        }

        // throw lanza una excepción después de cogerla
        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`Archivo tabla-${base}.txt creado`);
        }); */

        // Usando writeFileSync se ejecuta la función de manera asíncrona. Si se desea atrapar un error se debe usar try catch
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Archivo tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    // crearArchivo: crearArchivo es lo mismo que la línea de abajo sí y solo sí key = nombreFunción
    crearArchivo
};