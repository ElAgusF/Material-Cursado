//definiendo valores
let nombre = 'pepe'
let edad = 25
let precio = 99.90
let seriesFavoritas = ['Dark', 'Mr Robot', 'Castlevania']
let peliculasFavoritas = [
        {
            nombre: "Hombre en Llamas",
            añoEstreno: 2004,
            protagonistas: ['Denzel Washington', 'Dakota Fanning', 'Christopher Walken']

        },
        {
            nombre: 'Interstellar',
            añoEstreno: 2014,
            protagonistas: ['Matthew McConaughe', 'Anne Hattaway', 'Michael Cane']
        }
]
//funcion que muestra dato
function mostrarDato(dato){
    console.log(dato)
}
//funcion incrementar en 1 y mostrar
function incrementoMuestra(num){
    num = num + 1
    mostrarDato(num)
}
//funcion agregar serie y mostrar
function serieNueva(serie){
    seriesFavoritas.push('GoT')
    mostrarDato(serie)
}
//mostrando valores
mostrarDato(nombre)
mostrarDato(edad)
mostrarDato(precio)
mostrarDato(seriesFavoritas[0, 1, 2])
mostrarDato(peliculasFavoritas[0])
mostrarDato(peliculasFavoritas[1])
mostrarDato(peliculasFavoritas[0].nombre)
mostrarDato(peliculasFavoritas[0].añoEstreno)
mostrarDato(peliculasFavoritas[0].protagonistas)
mostrarDato(peliculasFavoritas[1].nombre)
mostrarDato(peliculasFavoritas[1].añoEstreno)
mostrarDato(peliculasFavoritas[1].protagonistas)
incrementoMuestra(edad)
serieNueva(seriesFavoritas)