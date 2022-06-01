import fireBase from "../../clases/firebase.js"

class ProductosDaoFirebase extends fireBase{
    constructor(){
        super('productos')
    }
}

export default ProductosDaoFirebase