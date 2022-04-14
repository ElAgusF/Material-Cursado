const express = require('express')
const app = express()
const PORT = 8080

let visitas = 1

app.get('/', (req, res) => {
   res.send(`
   <h1 style="color:blue">Bienvenidos al servidor express</h1>`)
})

app.get('/visitas', (req, res) => {
    const palabra = visitas === 1 ? 'vez' : 'veces'
    res.send(`Sitio visitado ${visitas++} ${palabra}`)
})

app.get('/fyh', (req, res) => {
    const fecha = new Date()
    res.send({
        fyh : fecha.toLocaleString()
    })
})


const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))