const Contenedor = require('../clases/contenedor')
const productos = new Contenedor('productos')

const productosCtrl = {}
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

productosCtrl.listAll = async (req,res) => {
    try {
        const allProducts = await productos.getAll()
        res.json(allProducts)
    } catch (error) {
        console.log(error)
    }
}

productosCtrl.getOne = async (req, res) => {
    try {
        const id = req.params.id
        const tempProducto = await productos.getByID(id)

        if (!tempProducto) {
            res.send({error: 'No se encuentra el producto.'})
        } else {
            res.json(tempProducto)
        }
    } catch (error) {
        console.log(error)
    }
}

productosCtrl.postOne = async (req, res) => {
    try {
        const allProducts = await productos.getAll()
        
        const getNewId = () => {
        let lastID = 0
        if (allProducts.length) {
          lastID = allProducts[allProducts.length - 1].id
        }
        return lastID + 1
      }

      const newProduct = {
        id: getNewId(),
        nombre: req.body.nombre ? req.body.nombre : 'Sin nombre',
        descripcion: req.body.descripcion ? req.body.descripcion : 'Sin descripcion',
        foto_url: req.body.foto_url ? req.body.foto_url : 'Sin imagen',
        precio: req.body.precio ? req.body.precio : 'Sin precio especificado',
        stock: req.body.stock ? req.body.stock : 'Sin stock especificado',
      }

      await productos.addItem(newProduct)
      res.json({status: `producto añadido`})

    } catch (error) {
        console.log(error)
    }
}

productosCtrl.putOne = async (req, res) => {
    try {
        const id = req.params.id
        const tempProducto = await productos.getByID(id)

        if (!tempProducto) {
            res.send({error: 'No se encontró el producto.'})
        } else {
            const editProducto = {
                id: tempProducto.id,
                nombre: req.body.nombre ? req.body.nombre : tempProducto.nombre,
                descripcion: req.body.descripcion ? req.body.descripcion : tempProducto.descripcion,
                foto_url: req.body.foto_url ? req.body.foto_url : tempProducto.foto_url,
                precio: req.body.precio ? req.body.precio : tempProducto.precio,
                stock: req.body.stock ? req.body.stock : tempProducto.stock,
            }
            await productos.editByID(editProducto)

            res.json({status: `producto actualizado`})
        }
    } catch (error) {
        console.log(error)
    }
}

productosCtrl.deleteOne = async (req, res) => {
    try {
        const id = req.params.id
        const respuesta = await productos.deleteByID(id)
        if (!respuesta) {
            res.json({error: `El producto con id ${id} no existe`})
        } else {
            res.json({status: `Producto eliminado.`})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = productosCtrl;