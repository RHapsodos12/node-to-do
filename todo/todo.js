const fs = require('fs');

let listaToDo = [];

const guardarDb = () => {
    let data = JSON.stringify(listaToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar ', err)
        }
    });
}

const cargarDb = () => {

    try {
        listaToDo = require('../db/data.json');
        
    } catch (error) {
        listaToDo = [];
    }
}

const crear = ( descripcion ) => {

    cargarDb();
    
    let toDo = {
        descripcion,
        completado: false,
    }

    listaToDo.push(toDo);
    guardarDb();

    return toDo;

}

const getListado = () => {
    
    cargarDb();

    return listaToDo;
}

const actualizar = (descripcion, completado = true) => {
    
    cargarDb();
    let index = listaToDo.findIndex( tarea => tarea.descripcion === descripcion);

    if (index > 0) {
        listaToDo[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrar = ( descripcion ) => {

    cargarDb();
    let index = listaToDo.findIndex( tarea => tarea.descripcion === descripcion);
    
    if ( index > 0 ) {
        listaToDo.splice(listaToDo[index], 1);
        guardarDb();
        return true;
    } else {
        return false;
    }

    /*
    Alternativa:

    cargarDb();
    let nuevoListado = listaToDo.filter( tarea => return tarea.descripcion !=== descripcion);

    if ( listaToDo.length === nuevoListado.length ) {
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDb();
        return true;
    }

    */
    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
