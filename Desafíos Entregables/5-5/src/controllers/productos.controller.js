const fs = require('fs')
const routerProductos = require('../routes/routerProductos')

const productosCtrl = {}
const productos = []
let esAdmin = false

productosCtrl.soloAdmin = (req, res, next) => {
    if (esAdmin) {
        next()
    } else {
        res.status(403).json({error: -1, descripcion: `ruta '${req.originalUrl}' y método ${req.method} no autorizados`})
    }
}

productosCtrl.login = (req,res) => {
    esAdmin = true
    res.sendStatus(200)
}

productosCtrl.logout = (req,res) => {
    esAdmin = false
    res.sendStatus(200)
}

productosCtrl.getAll = (req, res) => {
    res.json(productos)
}

productosCtrl.getOne = (req, res) => {
    const id = parseInt(req.params.id)
    tempProducto = productos[id - 1]
    if(!tempProducto){
        tempProducto = {error: 'producto no encontrado'}
    }
    res.json(tempProducto)
}

productosCtrl.postOne = async (req, res) => {
    if(!productos.length){
        productos.id = 1
    } else{
        productos.id = productos.length + 1
    }
    productos.push(req.body)
    await fs.promises.writeFile('./persistencia/productos.txt', JSON.stringify(productos), 'utf-8')
    console.log(`El id de este producto es ${productos.id}`)
    res.json({status: `producto añadido`})
}

productosCtrl.putOne = async (req, res) => {
    const nuevoProducto = req.body
    const id = parseInt(req.params.id)
    productos[id - 1] = nuevoProducto
    await fs.promises.writeFile('./persistencia/productos.txt', JSON.stringify(productos), 'utf-8')
    res.json({status: `producto actualizado`})
}

productosCtrl.deleteOne = async (req, res) => {
    const id = parseInt(req.params.id)
    productos.splice(id - 1, 1)
    await fs.promises.writeFile('./persistencia/productos.txt', JSON.stringify(productos), 'utf-8')
    res.json({status: `producto eliminado`})
}

module.exports = productosCtrl;
//module.exports = productos;