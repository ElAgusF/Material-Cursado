import usuariosPersistencia from '../daos/usuarios/usuariosPersistencia.js'

export const getUsuariosController = (req, res) => {
    const usuarios = usuariosPersistencia.obtenerTodos()
    res.json(usuarios)
}