//punto 1
//funcion mostrarLista
function mostrarLista(lista){
    if (!lista.length) {
        console.log('Lista vacía')
    } else {
        console.log(lista)
    }
}
//listas
let lista1 = ['detergente', 'esponja', 'desengrasante']
let lista2 = []
let lista3 = ['comprar pan']
//invocacion
mostrarLista(lista1)
mostrarLista(lista2)
mostrarLista(lista3)
//punto 2
let lista4 = [1, 2, 3]
let mostrarListaAnonima = function (lista){ console.log(lista) }
mostrarListaAnonima(lista4)
//punto 3
function crearMultiplicador(num1){
    return function (num2){
        return num1 * num2
    }
}
//punto 3
const doble = crearMultiplicador(2)
const triple = crearMultiplicador(3)

console.log(doble(48))
console.log(triple(32)) 