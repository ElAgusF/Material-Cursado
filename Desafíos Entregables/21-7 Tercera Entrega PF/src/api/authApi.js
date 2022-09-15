import usuariosPersistencia from "../daos/usuarios/usuariosPersistencia.js"

export function autenticar(username, password){
    let usuario
    try {
        usuario = usuariosPersistencia.obtenerPorUsername(username)
    } catch (error) {
        throw new Error('error de autenticacion')
    }
    if(usuario.password !== password){
        throw new Error('error de autenticacion')
    }
    return usuario
}