const Libro = require("../models/libro")

const LibroController = {}

LibroController.createLibro = async (req, res) => {
    var nuevo = new Libro(req.body)
    try {
        await nuevo.save()
        res.json({
            status: 1,
            message: "Libro creado correctamente"
        })
    } catch (error) {
        res.status(400).json({
            status: 0,
            msg: "Error al crear el libro"
        })
    }
}

module.exports = LibroController