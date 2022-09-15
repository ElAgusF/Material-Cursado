class Memoria{
    constructor(){
        this.elementos = []
    }

    getAll(){
        return [...this.elementos]
    }

    getByID(id){
        const itemByID = this.elementos.find((item) => item.id === Number(id))
        if (!itemByID) {
            throw new Error(`Error al listar: elemento no encontrado`)
        } else {
            return itemByID
        }
    }

    addItem(item){
        this.elementos.push(item)
        return [...this.elementos]
    }

    editByID(object){
        this.elementos = this.elementos.map((item) => (item.id !== object.id ? item : object))
        return [...this.elementos]
    }

    deleteByID(id){
        const index = this.elementos.findIndex(elem => elem.id == id)
        if (index == -1) {
            throw new Error(`Error al borrar: elemento no encontrado`)
        } else {
            return this.elementos.splice(index, 1)[0]
        }
    }

    deleteAll(){
        this.elementos = []
    }

    addItemToCart(cartID, object){
        let itemFound = this.elementos.find((item) => item.id === Number(cartID))
        itemFound.productos.push(object)
        this.elementos = this.elementos.map((item) => (item.id !== itemFound.id ? item : itemFound))
    }

    removeItemFromCart(cartID, objectID){
        let itemFound = this.elementos.find((item) => item.id === Number(cartID))
        itemFound.productos = itemFound.productos.filter((item) => item.id !== Number(objectID))
        this.elementos = this.elementos.map((item) => (item.id !== itemFound.id ? item : itemFound))
    }

    emptyCart(cartID){
        let itemFound = this.elementos.find((item) => item.id === Number(cartID))
        itemFound.productos = []
        this.elementos = this.elementos.map((item) => (item.id !== itemFound.id ? item : itemFound))
    }
}

export default Memoria