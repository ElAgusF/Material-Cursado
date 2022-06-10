const socket = io()
let usuario = ''
const botonUsuario = document.getElementById('botonUsuario')
botonUsuario.addEventListener('click', e => {
    const username = document.getElementById('txtNombre') 
    console.log(username.value)
    if (username.value) {
        usuario = username.value
        console.log(usuario)
        socket.emit('login', usuario)
        
    } else {
        alert('Por favor ingrese un nombre de usuario')
    }
} )

