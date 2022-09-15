import { Router } from "express"
import {requiereAutenticacion} from '../middleware/auth.js'
import {datosController} from '../controllers/datos.controller.js'

export const datosRouter = new Router()

datosRouter.get('/', requiereAutenticacion, datosController)

