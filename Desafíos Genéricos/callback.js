function mostrarLetras(string, demora){
    let i = 0
    const timer = setInterval(
        () => {
            console.log(string.charAt(i))
            if(string[i] === undefined){
                clearInterval(timer)
                console.log('terminé')
            }
            i++
        }, demora)
    
}
//funcion terminar
//function terminar(){
//   const fin = () => console.log('terminé')
//}
//const fin = () => console.log('terminé')
mostrarLetras('Hola', 1_000)
//mostrarLetras('Hola', 250)
//mostrarLetras('Hola', 500)
