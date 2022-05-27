const { createSecretKey } = require('crypto')
const Contenedor = require('../clases/contenedor')
const carritos = new Contenedor('carritos')
const productos = new Contenedor('productos')

const carritosCtrl = {}

carritosCtrl.listAll = async (req, res) =>{
    try {
        const allCarts = await carritos.getAll()
        res.json(allCarts)
    } catch (error) {
        console.log(error)
    }
}

carritosCtrl.getOne = async (req, res) => {
    try {
        const id = req.params.id
        const tempCart = await carritos.getByID(id)

        if (!tempCart) {
            res.json({error: `Carrito no encontrado.`})
        } else {
            res.json(tempCart)
        }
    } catch (error) {
        console.log(error)
    }
}

carritosCtrl.listProducts = async (req, res) =>{
    try {
        const id = req.params.id
        const tempCart = await carritos.getByID(id)

        if (!tempCart) {
            res.json({error: `Carrito no encontrado.`})
        } else {
            res.json(tempCart.productos)
        }
    } catch (error) {
        console.log(error)
    }
}

carritosCtrl.createOne = async (req, res) =>{
    try {
        const allCarts = await carritos.getAll()

        const getNewId = () => {
            let lastID = 0
            if (allCarts.length) {
            lastID = allCarts[allCarts.length - 1].id
            }
            return lastID + 1
        }

        const newCart = {
            id: getNewId(),
            productos: [],
        }

        await carritos.addItem(newCart)
        res.json(newCart.id)
    } catch (error) {
        console.log(error)
    }
}

carritosCtrl.addProduct = async (req, res) => {
    try {
        const cartID = req.params.id
        const prodID = req.params.id_prod

        const cartFound = await carritos.getByID(cartID)
        const productFound = await productos.getByID(prodID)

        if (!cartFound) {
            res.json({error: 'No se encontró el carrito'})
        } else if (!productFound) {
            res.json({error: 'No se encontró el producto'})
        } else{
            await carritos.addItemToCart(cartFound.id, productFound)
            res.json({status: 'Producto añadido al carrito.'})
        }
    } catch (error) {
        console.log(error)
    }
}

carritosCtrl.deleteProduct = async (req, res) => {
    try {
        const cartID = req.params.id
        const prodID = req.params.id_prod

        const cartFound = await carritos.getByID(cartID)
        const productFound = await productos.getByID(prodID)

        if (!cartFound) {
            res.json({error: 'No se encontró el carrito'})
        } else if (!productFound) {
            res.json({error: 'No se encontró el producto'})
        } else{
            await carritos.removeItemFromCart(cartFound.id, productFound.id)
            res.json({status: 'Producto eliminado del carrito.'})
        }
    } catch (error) {
        console.log(error)
    }
}

carritosCtrl.deleteOne = async (req, res) => {
    try {
        const id = req.params.id
        const tempCart = await carritos.getByID(id)

        if (!tempCart) {
            res.json({error: 'No se encontró el carrito.'})
        } else {
            await carritos.emptyCart(id)
            res.json({status: 'Carrito eliminado.'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = carritosCtrl;