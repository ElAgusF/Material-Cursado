const {Router} = require('express')

const routerMascotas = Router()
const mascotas = []

routerMascotas.get('/', (req, res) => {
    res.json(mascotas)
})

routerMascotas.post('/', (req, res) => {
    mascotas.push(req.body)
    res.send(`Mascota añadida`) 
})

module.exports = routerMascotas;