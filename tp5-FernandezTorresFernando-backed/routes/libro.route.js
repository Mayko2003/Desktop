const LibroController = require("../controllers/libro.controller")

const express = require("express")
const router = express.Router()

router.post('/create', LibroController.createLibro)
router.get('/', LibroController.getLibros)
router.delete('/delete', LibroController.deleteLibro)
router.put('/update', LibroController.updateLibro)
router.get('/destacados', LibroController.filterByDestacados)

module.exports = router