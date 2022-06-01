import express from 'express'
import routerProductos from './routes/routerProductos.js'
import routerCarritos from './routes/routerCarritos.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//app.use(express.static('public'))

app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarritos)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))