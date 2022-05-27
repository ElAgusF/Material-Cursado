const {Router} = require('express')

const {soloAdmin, login, logout, listAll, getOne, postOne, putOne, deleteOne} = require('../controllers/productos.controller')

const routerProductos = Router()

routerProductos.route('/login')
    .get(login)

routerProductos.route('/logout')
    .get(logout)

routerProductos.route('/')
    .get(listAll)
    .post(soloAdmin, postOne)

routerProductos.route('/:id')
    .get(getOne)
    .put(soloAdmin, putOne)
    .delete(soloAdmin, deleteOne)

module.exports = routerProductos;