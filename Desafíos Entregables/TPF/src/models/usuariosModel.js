import { crearId } from "./ids.js"
import { crearErrorDatos } from './errores.js'

export function crearUsuario(datos){
    if(!datos.username){
        throw new crearErrorDatos('falta el campo obligatorio "username"')
    }
        if(!datos.password){
        throw new crearErrorDatos('falta el campo obligatorio "password"')
    }
        if(!datos.direccion){
        throw new crearErrorDatos('falta el campo obligatorio "direccion"')
    }

    const usuario = {
        id: crearId(),
        username: datos.username,
        passowrd: datos.password,
        direccion: datos.direccion
    }

    return usuario
}