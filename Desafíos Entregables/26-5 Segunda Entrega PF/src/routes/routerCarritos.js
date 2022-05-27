const {Router} = require('express')

const {listAll, getOne, listProducts, createOne, addProduct, deleteProduct, deleteOne} = require('../controllers/carritos.controller')

const routerCarritos = Router()

routerCarritos.route('/')
    .get(listAll)
    .post(createOne)

routerCarritos.route('/:id')
    .get(getOne)
    .delete(deleteOne)

routerCarritos.route('/:id/productos')
    .get(listProducts)

routerCarritos.route('/:id/productos/:id_prod')
    .post(addProduct)
    .delete(deleteProduct)

module.exports = routerCarritos;