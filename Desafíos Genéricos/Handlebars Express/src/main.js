const express = require('express')
const exphbs = require('express-handlebars').engine

const app = express()

const hbsConfig = {
    extname: "hbs",
    defaultLayout: 'index.hbs' 
}

app.engine('hbs', exphbs(hbsConfig))

app.set('engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('datos.hbs', {
        nombre:'Agustin',
        apellido:'Fasano',
        edad:'23',
        email:'agus@fasano',
        telefono:'7777777' 
    })
})

app.listen(8080)