import { Router } from "express"

import {
    failLoginController, successLoginController,
    failRegisterController, successRegisterController,
    registroController, loginController, logoutController
} from '../controllers/auth.controller.js'

export const authRouter = new Router()

//registro
authRouter.post('/register', registroController)
authRouter.post('/failRegister', failRegisterController)
authRouter.post('/successRegister', successRegisterController)

//login
authRouter.post('/login', loginController)
authRouter.post('/failLogin', failLoginController)
authRouter.post('/successLogin', successLoginController)

//logout
authRouter.get('/logout', logoutController)