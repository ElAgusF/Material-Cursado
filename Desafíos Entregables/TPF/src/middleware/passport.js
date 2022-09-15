import passport from "passport"
import { Strategy } from "passport-local"

import usuariosPersistencia from "../daos/usuarios/usuariosPersistencia.js"

import {registrarUsuario} from '../api/usuariosApi.js'
import {autenticar} from '../api/authApi.js'

passport.use('registro', new Strategy({
    passReqToCallback: true
},
    (req, username, password, done) => {
        try {
            const datosUsuario = req.body
            const usuario = registrarUsuario(req.body)
            done(null, usuario)
        } catch (error) {
            return done(error)
        }
    }
))

passport.use('login', new Strategy(
    (username, password, done) => {
        try {
            const usuario = autenticar(username, password)
            done(null, usuario)
        } catch (error) {
            done(null, false)
        }
    }
))

export const passportMiddleware = passport.initialize()

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    const user = usuariosPersistencia.obtenerPorId(id)
    done(null, user)
})

export const passportSessionHandler = passport.session()