const fs = require('fs')
const routerCarritos = require('../routes/routerCarritos')
const productos = require('./productos.controller')

const carritosCtrl = {}
const carritos = []
let tempProd = [];

carritosCtrl.createOne = async (req, res) => {
    if (!carritos.length) {
        carritos.id = 1
    } else {
        carritos.id = carritos.length + 1
    }
    res.json({status: `carrito creado`, id: `${carritos.id}`})
}

carritosCtrl.postOne = async (req, res) => {
    const id = parseInt(req.params.id)
    const id_prod = parseInt(req.params.id_prod)
    tempProd = await fs.promises.readFile('./persistencia/productos.txt', 'utf-8')
    tempProd = JSON.parse(tempProd)
    tempProd = tempProd.splice(id_prod - 1, 1)
    carritos.push(tempProd)
    await fs.promises.writeFile('./persistencia/carritos.txt', JSON.stringify({id: `${id}`, productos: carritos}), 'utf-8')
    res.json({status: `producto añadido al carrito`})
}

carritosCtrl.getOne = async (req, res) => {
    const id = parseInt(req.params.id)
    let carritoTemp = await fs.promises.readFile('./persistencia/carritos.txt', 'utf-8')
    carritoTemp = JSON.parse(carritoTemp)
    res.json(carritoTemp.productos)
}

//carritosCtrl.deleteProduct = async (req, res) =>{
//    const id = parseInt(req.params.id)
//    const id_prod = parseInt(req.params.id_prod)
//    let carritoTemp = await fs.promises.readFile('./persistencia/carritos.txt', 'utf-8')
//    await fs.promises.writeFile('./persistencia/carritos.txt', JSON.stringify(carritoTemp))
//    res.json({status: `producto eliminado del carrito`})
//
//}

carritosCtrl.deleteCart = async (req,res) => {
    const id = parseInt(req.params.id)
    let carritoTemp = await fs.promises.readFile('./persistencia/carritos.txt', 'utf-8')
    carritoTemp = JSON.parse(carritoTemp)
    carritoTemp.productos = []
    await fs.promises.writeFile('./persistencia/carritos.txt',JSON.stringify(carritoTemp) , 'utf-8')
    res.json({status: `carrito borrado exitosamente`})
}

module.exports = carritosCtrl;


