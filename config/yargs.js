const argv = require('yargs')
    .option('base', {
        alias: 'b',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplciar'
    })
    .option('listar', {
        alias: 'l',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('hasta', {
        alias: 'h',
        type: 'number',
        default: '12',
        describe: 'Indica hasta donde va la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número.';
        }
        return true;
    })
    .argv;

module.exports = argv;