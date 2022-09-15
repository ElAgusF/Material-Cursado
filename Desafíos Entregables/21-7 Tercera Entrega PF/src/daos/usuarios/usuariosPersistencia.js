import { crearErrorNoEncontrado } from "../../models/errores.js"

const usuariosArray = []

export default {
    guardar: async usuario =>{
        usuariosArray.push(usuario)
        return usuario
    },
    obtenerTodos: async () => {
        return usuariosArray
    },
    obtenerPorUsername: async (username) =>{
            const buscado = usuariosArray.find(u => u.username === username)
            if(!buscado) throw crearErrorNoEncontrado()
            return buscado
    },
    asegurarNombreUnico: async (username) =>{
        const usuario = usuariosArray.find(u => u.username === username)
        if(usuario) throw new Error('el nombre de usuario no está disponible')
    },
    obtenerPorId: async (id) => {
        const usuario = usuariosArray.find(u => u.id === id)
        if(!usuario) throw new Error('no existe usuario con ese id')
        return usuario
    }
}



