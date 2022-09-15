import {Router} from 'express'

import { getUsuariosController } from '../controllers/usuarios.controller.js'

export const usuariosRouter = new Router()

usuariosRouter.get('/', getUsuariosController)