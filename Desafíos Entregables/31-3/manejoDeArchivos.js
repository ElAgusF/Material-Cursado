const fs = require('fs')

let ID = 0
const filepath = "productos.txt"

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
        this.cosas = []
    }

    async save(objeto){
        try {
            objeto.id = ID + 1 
            this.cosas.push(objeto)
            ID = ID + 1
            await fs.promises.writeFile(this.ruta, JSON.stringify(this.cosas), 'utf-8')
            function imprimirID(){console.log(`ID asignado: ${objeto.id}`)}
            imprimirID()
        } catch (error) {
            console.log(error)
        } 
        
    }

    async getAll(){
        try {
            const datos = await fs.promises.readFile(this.ruta, 'utf-8')
            console.log(JSON.parse(datos))
        } catch (error) {
            console.log(error)
        }
        //console.log(this.cosas)
    }

   async deleteAll(){
        try {
            await fs.promises.writeFile(this.ruta, '')
        } catch (error) {
            console.log(error)
            }
           
            }

    async getById(numero){
        try {
            const idSolicitado = numero
            const datos = await fs.promises.readFile(this.ruta, 'utf-8')
            const datos2 = [] = JSON.parse(datos)
            for(let i = 0; i < datos2.length; i++){
                if(datos2[i].id === idSolicitado){
                    console.log(datos2[i])
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(numero){
        try {
            const idSolicitado = numero
            const datos = await fs.promises.readFile(this.ruta, 'utf-8')
            const datos2 = [] = JSON.parse(datos)
            datos2.splice(idSolicitado - 1, 1)
            await fs.promises.writeFile(this.ruta, JSON.stringify(datos2), 'utf-8')

        } catch (error) {
            console.log(error)
        }
    }
    
}

const contenedor = new Contenedor(filepath)

const producto1 = {
    title: 'Reloj de mano',
    price: 800,
    thumbnail: 'https://cdn4.iconfinder.com/data/icons/objects-2-3/50/155-512.png',
    id: []
}

const producto2 = {
    title: 'Cartuchera',
    price: 1300,
    thumbnail: 'https://cdn4.iconfinder.com/data/icons/back-to-school-151/64/pencil-case-office-tool-education-256.png',
    id: []
}

const producto3 = {
    title: 'Lapicera',
    price: 41.8,
    thumbnail: 'https://cdn1.iconfinder.com/data/icons/office-196/100/Ballpoint_Pen-256.png',
    id: []
}
setTimeout(function () {contenedor.save(producto1)}, 200)
setTimeout(function () {contenedor.save(producto2)}, 400)
setTimeout(function () {contenedor.save(producto3)}, 600)
setTimeout(function (){contenedor.getById(2)}, 1_000)
setTimeout(function (){contenedor.getById(4)}, 1_200)
setTimeout(function (){contenedor.deleteById(1)}, 1_400)
setTimeout(function (){contenedor.getAll()}, 1_600)
setTimeout(function (){contenedor.deleteAll()}, 5_000 )


