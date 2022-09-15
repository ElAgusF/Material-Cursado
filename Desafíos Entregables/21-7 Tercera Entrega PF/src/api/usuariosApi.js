import { crearUsuario } from "../models/usuariosModel.js"
import usuariosPersistencia from "../daos/usuarios/usuariosPersistencia.js"

export function registrarUsuario(datosUsuario){
    usuariosPersistencia.asegurarNombreUnico(datosUsuario.username)
    const usuario = crearUsuario(datosUsuario)
    usuariosPersistencia.guardar(usuario)
    return usuario
}