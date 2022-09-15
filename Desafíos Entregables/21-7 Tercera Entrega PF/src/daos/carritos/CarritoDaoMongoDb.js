import MongoDB from "../../clases/MongoDB.js"

class CarritoDaoMongoDb extends MongoDB{
    constructor(){
        super('carritos', {
      id: { type: Number, required: true },
      productos: { type: Array, required: false },
    })
    }
}

export default CarritoDaoMongoDb