const {Router} = require('express')

const {createOne, postOne, getOne, deleteProduct, deleteCart} = require('../controllers/carritos.controller')

const routerCarritos = Router()

routerCarritos.route('/')
    .post(createOne)

routerCarritos.route('/:id/productos/:id_prod')
    .post(postOne)

routerCarritos.route('/:id/productos')
    .get(getOne)

routerCarritos.route('/:id')
    .delete(deleteCart)

module.exports = routerCarritos;

