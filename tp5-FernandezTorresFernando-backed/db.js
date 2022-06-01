const mongose = require("mongose")
const dbURI = "mongodb://localhost/tp5"

mongose.connect(URI)
.then(db => {console.log("Conectado a la base de datos")})
.catch(err => {console.log("Error al conectar a la base de datos\n" + err)})

module.exports = mongose