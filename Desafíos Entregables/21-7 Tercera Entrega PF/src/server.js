import express from 'express'

import {sessionHandler as session} from './middleware/session.js'
import {passportMiddleware, passportSessionHandler} from './middleware/passport.js'

import routerProductos from './routes/routerProductos.js'
import routerCarritos from './routes/routerCarritos.js'
import {usuariosRouter} from './routes/routerUsuarios.js'
import {authRouter} from './routes/routerAuth.js'
import {datosRouter} from './routes/routerDatos.js'
import errorHandler from './middleware/errorHandler.js'


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(session)
app.use(passportMiddleware)
app.use(passportSessionHandler)
//app.use(express.static('public'))

app.get('/', (_, res) => {res.send('ok')} )
app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarritos)
app.use('/api/usuarios', usuariosRouter)
app.use('/auth', authRouter)
app.use('/api/datos', datosRouter)
app.use(errorHandler)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))