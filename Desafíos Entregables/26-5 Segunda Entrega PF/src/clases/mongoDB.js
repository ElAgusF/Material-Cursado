import mongoose from 'mongoose'
import config from '../config.js'

try {
  await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options, () =>
    console.log('Conexión a Mongoose exitosa')
  )
} catch (error) {
  console.log('No se pudo conectar a Mongoose')
}
const dbConnection = mongoose.connection
dbConnection.on('error', (error) => console.log(`Connection error: ${error}`))
dbConnection.once('open', () => console.log('Conectado a la base de datos'))

//contenedor

class MongoDB{
    constructor(nombreColeccion, esquema){
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async getAll() {
    try {
      const allItems = await this.collection.find({})
      return allItems
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async getById(id) {
    try {
      const itemByID = await this.collection.find({ id: Number(id) })
      return itemByID
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async addItem(item) {
    try {
      await this.collection.create(item)
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async editById(item, id) {
    try {
      await this.collection.updateOne(
        {
          id: id,
        },
        { $set: item }
      )
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async deleteById(id) {
    try {
      const filter = await this.collection.find({ id: Number(id) })
      if (filter && filter.length) {
        await this.collection.deleteOne({
          id: id,
        })
        return true
      } else {
        return false
      }
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async deleteAll() {
    try {
      await this.collection.deleteMany({})
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async addItemToCart(cartID, object) {
    try {
      await this.collection.updateOne({ id: cartID }, { $push: { productos: object[0] } })
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async removeItemFromCart(cartID, objectID) {
    try {
      await this.collection.updateOne(
        { id: cartID },
        {
          $pull: {
            productos: { id: objectID },
          },
        }
      )
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  async emptyContainer(cartID) {
    try {
      await this.collection.updateOne(
        { id: cartID },
        {
          $pullAll: {
            productos: [{}],
          },
        }
      )
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }
}

export default MongoDB