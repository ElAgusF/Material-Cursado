const fs = require('fs')
const t = new Date()
const dia = ('0' + t.getDate()).slice(-2)
const mes = ('0' + (t.getMonth() + 1)).slice(-2)
const año = t.getFullYear()
const horas = ('0' + t.getHours()).slice(-2)
const minutos = ('0' + t.getMinutes()).slice(-2)
const segundos = ('0' + t.getSeconds()).slice(-2)
try {
    fs.writeFileSync('fyh.txt', `${dia}/${mes}/${año}, ${horas}:${minutos}:${segundos}`)
    const result = fs.readFileSync('fyh.txt', 'utf-8')
    console.log(result)
} catch (error) {
    console.log(error)
}
//console.log(`${dia}/${mes}/${año}, ${horas}:${minutos}:${segundos}`)