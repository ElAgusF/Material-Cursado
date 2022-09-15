import MongoDB from "../../clases/MongoDB.js"

class ProductosDaoMongoDb extends MongoDB{
    constructor(){
        super('productos', {
            id: { type: Number, required: true },
            nombre: { type: String, required: true },
            descripcion: { type: String, required: true },
            foto_url: { type: String, required: false },
            precio: { type: Number, required: true },
            stock: { type: Number, required: true },
        })
    }
}

export default ProductosDaoMongoDb