const yargsOpts = {
    create: {
        descripcion: {
            alias: 'd',
            demand: true,
            description: 'Valor de la tarea a crear para luego sumar a la lista por hacer'
        }
    },
    update: {
        descripcion: {
            alias: 'd',
            demand: true,
            description: 'Valor de la tarea a crear para luego sumar a la lista por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            description: 'Indica cuando se ha completado o no una tarea por hacer'
        }
    },
    delete: {
        descripcion: {
            alias: 'd',
            demand: true,
            description: 'Elimina la tarea especificada'
        }
    },
}
 
const argv = require('yargs')
                    .command('crear', 'Crear un elemento por hacer', yargsOpts.create)
                    .command('actualizar', 'Actualiza el estado completado de una tarea', yargsOpts.update)
                    .command('borrar', 'Elimina una tarea', yargsOpts.delete)
                    .help()
                    .argv;
 
module.exports = {
    argv
}