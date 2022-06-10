const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

//persistencia MongoAtlas
const MongoStore = require('connect-mongo')
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }


const normalizr = require('normalizr')
const normalize = normalizr.normalize
const denormalize = normalizr.denormalize
const schema = normalizr.schema
const util = require('util')

const connection = require('./config/index.js')
const knexMariaDB = require('knex')(connection.mariaDBConfig)
const knexSqlite = require('knex')(connection.sqliteConfig)
const routerProductos = require('./routes/fakerRouter')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')
const Contenedor = require('./contenedor/contenedorArchivo.js')

const app = express()
app.use(session({
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://root:M!BsDUrN4HAEkez@cluster0.kfscxhy.mongodb.net/test`,
        mongoOptions: advancedOptions
    }),
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        username: 'pepe',
        maxAge: 30
    }
}))
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const productos = []
const mensajes = []
const datos = new Contenedor('mensajes')

//configuracion de socket
app.get('/con-session', (req, res) =>{
    res.redirect('/products.html')
    
    io.on('connection', async socket =>{
        //parte productos
        knexMariaDB
            .select()
            .table('productos')
            .then((productos) => {
                socket.emit('productos', productos)
            });

        knexSqlite
            .select()
            .table('mensajes')
            .then((mensajes) =>{
                socket.emit('mensajesActualizados', mensajes )
            });

        socket.on('update', async (producto) => {
            await knexMariaDB('productos').insert(producto)
            productos.push(producto)
            io.sockets.emit('productos', productos)
        })

        //parte mensajes

        const messagesListed = datos.getAll()

        const authorSchema = new schema.Entity('authors')

        const messageSchema = new schema.Entity('message', {
            author: authorSchema,
            }, {idAttribute:'autor'})
        
        const normalizedMessages = normalize(originalData, [messageSchema])

        console.log(util.inspect(normalizedMessages, false, 12, true))

        socket.emit('mensajesActualizados', mensajes )

        socket.on('nuevoMensaje', async mensaje => {
            mensaje.fecha = new Date().toLocaleString()
            mensajes.push(mensaje)
            await datos.addItem(mensaje)
            io.sockets.emit('mensajesActualizados', mensajes)
        })
        })

})

app.use('/api/productos-test', routerProductos)

//--------------------------------------------------------


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//iniciacion de servidor

const PORT = 8080
const conexionServidor = httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
conexionServidor.on('error', error => console.log(error))