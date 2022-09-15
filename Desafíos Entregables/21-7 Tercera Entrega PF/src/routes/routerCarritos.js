import { Router } from 'express'
//const {Router} = require('express')

import carritosCtrl from '../controllers/carritos.controller.js'
//const {listAll, getOne, listProducts, createOne, addProduct, deleteProduct, deleteOne} = require('../controllers/carritos.controller')

const routerCarritos = new Router()

routerCarritos.get('/', carritosCtrl.listAll)
routerCarritos.post('/', carritosCtrl.createOne)
//routerCarritos.route('/')
//    .get(listAll)
//    .post(createOne)

routerCarritos.get('/:id', carritosCtrl.getOne)
routerCarritos.delete('/:id', carritosCtrl.deleteOne)
//routerCarritos.route('/:id')
//    .get(getOne)
//    .delete(deleteOne)

routerCarritos.get('/:id/productos', carritosCtrl.listProducts)
//routerCarritos.route('/:id/productos')
//    .get(listProducts)

routerCarritos.post('/:id/productos/:id_prod', carritosCtrl.addProduct)
routerCarritos.delete('/:id/productos/:id_prod', carritosCtrl.deleteProduct)
//routerCarritos.route('/:id/productos/:id_prod')
//    .post(addProduct)
//    .delete(deleteProduct)

export default routerCarritos
    //module.exports = routerCarritos;