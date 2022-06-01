const mongoose = require("mongoose")
const dbURI = "mongodb://localhost/tp5"

mongoose.connect(dbURI)
.then(db => {console.log("Conectado a la base de datos")})
.catch(err => {console.log("Error al conectar a la base de datos\n" + err)})

module.exports = mongoose