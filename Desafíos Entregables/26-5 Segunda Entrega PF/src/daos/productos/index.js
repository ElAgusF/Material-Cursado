import config from '../../config.js'

let productosDao

switch (process.env.DB_RUTA) {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./ProductosDaoArchivo.js')
        productosDao = new ProductosDaoArchivo('productos')
        break
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./ProductosDaoFirebase.js')
        productosDao = new ProductosDaoFirebase()
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDb } = await import('./ProductosDaoMongoDb.js')
        productosDao = new ProductosDaoMongoDb()
        break
    default:
        const { default: ProductosDaoMem } = await import('./ProductosDaoMem.js')
        productosDao = new ProductosDaoMem()
        break
}

export { productosDao }