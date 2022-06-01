const express = require("express")
const cors = require("cors")
const {mongoose} = require("./db")

var app = express()

//middlewares
app.use(cors({origin: "http://localhost:4200"}))
app.use(express.json())

//cargamos los modulos de rutas
const libroRoutes = require("./routes/libro.route")


//configuraciones
app.set("port", process.env.PORT || 3000)

//iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor iniciado en el puerto " + app.get("port"))
})