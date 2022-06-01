const LibroController = require("../controllers/libro.controller")

const express = require("express")
const router = express.Router()

router.post('/create', LibroController.createLibro)


module.exports = router