const opts = {
    base: {
        require: true,
        alias: 'b',
        description: 'base para la multiplicacion'

    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con el resultado de la multiplicacion', opts)
    .help()
    .argv;

module.exports = {
    argv
}