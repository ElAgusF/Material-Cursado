import fireBase from "../../clases/firebase.js"

class CarritoDaoFirebase extends fireBase{
    constructor(){
        super('carritos')
    }
}

export default CarritoDaoFirebase