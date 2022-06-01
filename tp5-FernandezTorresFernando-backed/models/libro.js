const mongoose = require("mongoose")
const {Schema} = mongoose

const LibroSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: false},
    imagen : {type: String, required: false},
    stock: {type: Number, required: true},
    destacado : {type: Boolean, required: false},
})


module.exports = mongoose.models.Libro || mongoose.model("Libro", LibroSchema)
