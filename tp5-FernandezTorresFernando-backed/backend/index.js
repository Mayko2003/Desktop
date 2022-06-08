const express = require("express")
const cors = require("cors")
const {mongoose} = require("./db")

var app = express()

//middlewares

//cors policy
app.use(cors({origin: "http://localhost:4200"})) //only allow localhost:4200
// decode JSON data
app.use(express.json()) 

//decode Form Url Encoded data
app.use(express.urlencoded( 
    {extended: false}
));

//cargamos los modulos de rutas
app.use('/libros', require("./routes/libro.route"))
app.use('/transacciones', require('./routes/transaccion.route'))
app.use('/personas', require('./routes/persona.route'))
app.use('/pasajes', require('./routes/pasaje.route'))

//configuraciones
app.set("port", process.env.PORT || 3000)


//iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor iniciado en el puerto " + app.get("port"))
})