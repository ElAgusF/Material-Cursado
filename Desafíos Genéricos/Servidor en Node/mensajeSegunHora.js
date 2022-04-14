const http = require ('http')
const dia = new Date()
const hora = dia.getHours()

const server = http.createServer((peticion, respuesta) => {
if(hora >= 6 && hora <= 12){
    respuesta.end('Buenos días!')
}else if(hora >= 13 && hora <= 19){
    respuesta.end('Buenas tardes!')
}else if(hora >= 20 && hora <= 23 || hora >= 0 && hora <= 5){
    respuesta.end('Buenas noches!')
}

})

const connectedServer = server.listen(8080, () =>{
    console.log(`Servidor Http escuchando y listo para operar en el puerto ${connectedServer.address().port}`)
})