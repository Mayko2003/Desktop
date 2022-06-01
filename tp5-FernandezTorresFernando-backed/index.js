const express = require("express")
const cors = require("cors")
const {mongoose} = require("./db")

var app = express()

//middlewares
app.use(cors({origin: "http://localhost"}))
app.use(express.json())
app.use(express.urlencoded(
    {extended: false}
));

//cargamos los modulos de rutas
app.use("/libros", require("./routes/libro.route"))


//configuraciones
app.set("port", process.env.PORT || 3000)


//iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor iniciado en el puerto " + app.get("port"))
})