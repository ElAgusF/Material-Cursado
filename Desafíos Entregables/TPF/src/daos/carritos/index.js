import config from '../../config.js'

let carritoDao

switch (process.env.DB_RUTA) {
  case 'json':
    const { default: CarritoDaoArchivo } = await import('./CarritoDaoArchivo.js')
    carritoDao = new CarritoDaoArchivo('carritos')
    break
  case 'mongodb':
    const { default: CarritoDaoMongoDB } = await import('./CarritoDaoMongoDb.js')
    carritoDao = new CarritoDaoMongoDB()
    break
  case 'firebase':
    const { default: CarritoDaoFirebase } = await import('./CarritoDaoFirebase.js')
    carritoDao = new CarritoDaoFirebase()
    break
  default:
    const { default: CarritoDaoMem } = await import('./CarritoDaoMem.js')
    carritoDao = new CarritoDaoMem()
    break
}

export { carritoDao }