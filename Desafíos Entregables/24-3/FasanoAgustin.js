class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        let titulos = [];
        let autores = [];
        this.libros = [{
            nombre: [null],
            autor: [null] 
        }]
        this.libros.nombre = titulos;
        this.libros.autor = autores;
        this.mascotas = [];
         
    }

    getFullName(){
        return `Usuario: ${this.apellido}, ${this.nombre}`
    }
    addMascota(animal){
        this.mascotas.push(animal)
    }
    countMascotas(){
        return console.log(this.mascotas.length)
    }
    addBook(titulo, escritor){
        this.libros.nombre.push(titulo)
        this.libros.autor.push(escritor)
    }
    getBookNames(){
        return console.log(`nombre/s: ${this.libros.nombre}`)
    }
}

const usuario = new Usuario('Ricardo', 'Fort')

console.log(usuario.getFullName())
usuario.addMascota('caballo')
usuario.addMascota('gato')
console.log(usuario.mascotas)
usuario.countMascotas()
usuario.addBook(' Se que estas allí', 'Lydia Carreras de Sosa')
usuario.getBookNames()
usuario.addBook(' Fundacion', 'Isaac Asimov')
usuario.getBookNames()
console.log(usuario.libros.nombre)
