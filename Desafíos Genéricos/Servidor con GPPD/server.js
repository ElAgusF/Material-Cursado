const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }))

let frase = ['Frase', 'inicial']

app.get('/api/frase', (req, res) =>{
    res.send({ frase: frase.join(' ') })
})

app.get('/api/palabras/:pos', (req, res) =>{
    const pos = parseInt(req.params.pos)
    

    res.json({buscada: frase[pos - 1]})
})

app.post('/api/palabras', (req, res) => {
    const {palabra} = req.body
    frase.push(palabra)
    res.json({agregada: palabra, pos: frase.length})
})

app.put('/api/palabras/:pos', (req, res) => {
    const {palabra} = req.body
    const {pos} = req.params
    const palabraPrevia = frase[parseInt(pos) - 1]
    frase[pos - 1] = palabra
    res.send({actualizada: palabra, anterior: palabraPrevia})
})

app.delete('/api/palabras/:pos', (req, res) => {
    const {pos} = req.params
    const [palabra] = frase.splice(parseInt(pos) - 1, 1)
    res.send({borrada: palabra})
})

const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))