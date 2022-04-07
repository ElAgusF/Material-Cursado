const express = require("express");
const Contenedor = require("./manejoDeArchivos");
const app = express();
const PORT = process.env.PORT || 8080;
const datos = new Contenedor('productos.txt')

app.get('/', (req, res) => {
   res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)
})

app.get("/productos", async (req, res) => {
  const productos = await datos.getAll()
  res.send(productos)
  
})

app.get("/productosRandom", async (req, res) => {
  const productos = await datos.getAll()
  const idRandom = Math.floor(Math.random() * productos.length)
  const productoRandom = productos[idRandom]
  res.send(productoRandom)
})

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on("error", (error) => console.log(`Error en servidor ${error}`));
