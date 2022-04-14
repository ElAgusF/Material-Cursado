const express = require('express')
const routerPersonas = require('./routerPersonas')
const routerMascotas = require('./routerMascotas')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/api/personas', routerPersonas)
app.use('/api/mascotas', routerMascotas)

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))