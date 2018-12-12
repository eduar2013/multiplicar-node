const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

var green = colors.green;

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${green(archivo)}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no valido');
}