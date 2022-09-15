import admin from 'firebase-admin'
import config from '../config.js'

admin.initializeApp({
  credential: admin.credential.cert(config.firebase)
})
const db = admin.firestore()

class fireBase{
    constructor(nombreColeccion){
        this.coleccion = db.collection(nombreColeccion)
    }

    async readFile(){
        try {
            return JSON.parse(await fs.promises.readFile(`./DB/${this.fileName}.json`, 'utf-8'))
        } catch (error) {
            console.log(error)
        }
    }

    async writeFile(data) {
        try {
            fs.promises.writeFile(`DB/${this.fileName}.json`, JSON.stringify(data), 'utf-8')
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    }

    async getAll(){
        try {
            const allItems = await this.readFile()
            return allItems
        } catch (error) {
            await this.writeFile([])
            const allItems = await this.readFile()
            return allItems
        }
    }

    async getByID(id){
        try {
            const allItems = await this.readFile()
            const itemByID = allItems.find((item) => item.id === Number(id))
            return itemByID
        } catch (error) {
            console.log(error)
        }
    }

    async addItem(item){
        try {
            const allItems = await this.readFile()
            allItems.push(item)
            await this.writeFile(allItems)
        } catch (error) {
            console.log(error)
        }
    }

    async editByID(object){
        try {
            let allItems = await this.readFile()
            allItems = allItems.map((item) => (item.id !== object.id ? item : object))
            await this.writeFile(allItems)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteByID(id){
        try {
            const allItems = await this.readFile()
            const filter = allItems.filter((item) => item.id !== Number(id))
            if (JSON.stringify(allItems) === JSON.stringify(filter)) {
                return false
            } else {
                await this.writeFile(filter)
                return true
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(){
        try {
            await this.writeFile([])
        } catch (error) {
            console.log(error)
        }
    }

    async addItemToCart(cartID, object){
        try {
            let allItems = await this.readFile()
            let itemFound = allItems.find((item) => item.id === Number(cartID))
            itemFound.productos.push(object)
            allItems = allItems.map((item) => (item.id !== itemFound.id ? item : itemFound))
            await this.writeFile(allItems)
        } catch (error) {
            console.log(error)
        }
    }

    async removeItemFromCart(cartID, objectID){
        try {
            let allItems = await this.readFile()
            let itemFound = allItems.find((item) => item.id === Number(cartID))
            itemFound.productos = itemFound.productos.filter((item) => item.id !== Number(objectID))
            allItems = allItems.map((item) => (item.id !== itemFound.id ? item : itemFound))
            await this.writeFile(allItems)
        } catch (error) {
            console.log(error)
        }
    }

    async emptyCart(cartID){
        try {
            let allItems = await this.readFile()
            let itemFound = allItems.find((item) => item.id === Number(cartID))
            itemFound.productos = []
            allItems = allItems.map((item) => (item.id !== itemFound.id ? item : itemFound))
            await this.writeFile(allItems)
        } catch (error) {
            console.log(error)
        }
    }

    async borrarAll() {
        try {
            const docs = await this.listarAll()
            const ids = docs.map(d => d.id)
            const promesas = ids.map(id => this.borrar(id))
            const resultados = await Promise.allSettled(promesas)
            const errores = resultados.filter(r => r.status == 'rejected')
            if (errores.length > 0) {
                throw new Error('no se borró todo. volver a intentarlo')
            }
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async desconectar() {}
}

export default fireBase