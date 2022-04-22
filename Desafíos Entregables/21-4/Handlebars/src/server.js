const path = require('path')
const express = require('express')
const routerProductos = require('./routes/routerProductos')
const engine = require('express-handlebars').engine

const app = express()
const hbsConfig = {
    //extname: '.hbs',
    defaultLayout: 'index'
}

//const viewsPath = path.join(__dirname, '../src/views')

app.engine('handlebars', engine(hbsConfig))
app.set('view engine', 'handlebars')
app.set('views', 'src/views')

//app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routerProductos)
app.use(express.static('public'))

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))