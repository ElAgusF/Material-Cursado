//definiendo clase
class Contador{
    constructor(nombre){
        this.nombre = nombre;
        this.cuentaPersonal = 0;
        

    }
//contabilidad general
    static cuentaGeneral = 0
//funcion que devuelve el responsable
    obtenerResponsable(){
        return `nombre: ${this.nombre}`
    }
//funcion que devuelve cantidad contada individual
   obtenerCuentaIndividual(){
        return `cantidad contada: ${this.cuentaPersonal}`
    }
//funcion contar
    contar(){
        this.cuentaPersonal = this.cuentaPersonal + 1
        Contador.cuentaGeneral = Contador.cuentaGeneral + 1
    }

}


function obtenerCuentaGlobal(){
        return `cuenta global: ${Contador.cuentaGeneral}`
    }

const cliente1 = new Contador('Guillermo')

const cliente2 = new Contador('Miguel')

//probando funcionamiento
console.log(cliente1.obtenerResponsable()) 
console.log(cliente2.obtenerResponsable()) 
console.log(cliente1.obtenerCuentaIndividual()) 
console.log(cliente2.obtenerCuentaIndividual()) 
cliente1.contar()
cliente1.contar() 
console.log(cliente1.obtenerCuentaIndividual())
cliente1.contar()
console.log(cliente1.obtenerCuentaIndividual()) 
cliente2.contar()
cliente2.contar() 
console.log(cliente2.obtenerCuentaIndividual()) 
console.log(obtenerCuentaGlobal())
