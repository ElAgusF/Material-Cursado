const express = require('express')
const app = express()

const frase = 'Hola mundo cómo están!'

app.get('/api/frase', (req, res) =>{
    res.json({frase: frase})
})

app.get('/api/letras/:num', (req, res) =>{
    const num = parseInt(req.params.num)
    if(isNaN(num)){
        res.send({error: `El parámetro no es un número`})
    }
    
    if(num < 1 || num > frase.length){
        res.send({error: `El parámetro está fuera de rango`})
    }

    res.json({letra: frase[num - 1]})
})

app.get('/api/palabras/:num', (req, res) =>{
    const num = parseInt(req.params.num)
    if(isNaN(num)){
        res.send({error: `El parámetro no es un número`})
    }
    const palabras = frase.split(" ")

    if(num < 1 || num > palabras.length){
        res.send({error: `El parámetro está fuera de rango`})
    }

    res.json({letra: palabras[num - 1]})
})


const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))