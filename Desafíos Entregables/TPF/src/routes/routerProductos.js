import { Router } from 'express'

import productosCtrl from '../controllers/productos.controller.js'
//const {soloAdmin, login, logout, listAll, getOne, postOne, putOne, deleteOne} = require('../controllers/productos.controller')

const routerProductos = new Router()

routerProductos.get('/login', productosCtrl.login)
//routerProductos.route('/login')
//    .get(login)

routerProductos.get('/logout', productosCtrl.logout)
//routerProductos.route('/logout')
//    .get(logout)

routerProductos.get('/', productosCtrl.listAll)
routerProductos.post('/', productosCtrl.soloAdmin, productosCtrl.postOne)
//routerProductos.route('/')
//    .get(listAll)
//    .post(soloAdmin, postOne)

routerProductos.get('/:id', productosCtrl.getOne)
routerProductos.put('/:id', productosCtrl.soloAdmin, productosCtrl.putOne)
routerProductos.delete('/:id', productosCtrl.soloAdmin, productosCtrl. deleteOne)
//routerProductos.route('/:id')
//    .get(getOne)
//    .put(soloAdmin, putOne)
//    .delete(soloAdmin, deleteOne)

export default routerProductos
    //module.exports = routerProductos;