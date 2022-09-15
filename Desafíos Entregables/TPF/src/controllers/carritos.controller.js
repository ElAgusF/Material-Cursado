import { carritoDao } from "../daos/carritos/index.js"
import { productosDao } from "../daos/productos/index.js"

const carritosCtrl = {

listAll:  async (req, res) =>{
    try {
        const allCarts = await carritoDao.getAll()
        res.json(allCarts)
    } catch (error) {
        console.log(error)
    }
},

getOne:  async (req, res) => {
    try {
        const id = req.params.id
        const tempCart = await carritoDao.getByID(id)

        if (!tempCart) {
            res.json({error: `Carrito no encontrado.`})
        } else {
            res.json(tempCart)
        }
    } catch (error) {
        console.log(error)
    }
},

listProducts: async (req, res) =>{
    try {
        const id = req.params.id
        const tempCart = await carritoDao.getByID(id)

        if (!tempCart) {
            res.json({error: `Carrito no encontrado.`})
        } else {
            res.json(tempCart.productos)
        }
    } catch (error) {
        console.log(error)
    }
},

createOne: async (req, res) =>{
    try {
        const allCarts = await carritoDao.getAll()

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

        await carritoDao.addItem(newCart)
        res.json(newCart.id)
    } catch (error) {
        console.log(error)
    }
},

addProduct: async (req, res) => {
    try {
        const cartID = req.params.id
        const prodID = req.params.id_prod

        const cartFound = await carritoDao.getByID(cartID)
        const productFound = await productosDao.getByID(prodID)

        if (!cartFound) {
            res.json({error: 'No se encontró el carrito'})
        } else if (!productFound) {
            res.json({error: 'No se encontró el producto'})
        } else{
            await carritoDao.addItemToCart(cartFound.id, productFound)
            res.json({status: 'Producto añadido al carrito.'})
        }
    } catch (error) {
        console.log(error)
    }
},

deleteProduct: async (req, res) => {
    try {
        const cartID = req.params.id
        const prodID = req.params.id_prod

        const cartFound = await carritoDao.getByID(cartID)
        const productFound = await productosDao.getByID(prodID)

        if (!cartFound) {
            res.json({error: 'No se encontró el carrito'})
        } else if (!productFound) {
            res.json({error: 'No se encontró el producto'})
        } else{
            await carritoDao.removeItemFromCart(cartFound.id, productFound.id)
            res.json({status: 'Producto eliminado del carrito.'})
        }
    } catch (error) {
        console.log(error)
    }
},

deleteOne: async (req, res) => {
    try {
        const id = req.params.id
        const tempCart = await carritoDao.getByID(id)

        if (!tempCart) {
            res.json({error: 'No se encontró el carrito.'})
        } else {
            await carritoDao.emptyCart(id)
            res.json({status: 'Carrito eliminado.'})
        }
    } catch (error) {
        console.log(error)
    }
}

}

//export default {listAll, getOne, listProducts, createOne, addProduct, deleteProduct, deleteOne}
export default carritosCtrl