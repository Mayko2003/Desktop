const Pasaje = require("../models/pasaje")
const Persona = require("../models/persona")

const PasajeController = {}

PasajeController.createPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body)
    try {
        if (req.body.categoriaPasaje != "m" && req.body.categoriaPasaje != "a" && req.body.categoriaPasaje != "j")
            throw new Error("Categoria de pasaje no valida")
        const dni = req.body.dniPasajero
        const persona = await Persona.findOne({ dni: dni })

        if(!persona) throw new Error("No existe la persona")

        pasaje.pasajero = persona._id

        await pasaje.save()
        res.status(200).json({
            status: 1,
            message: "Pasaje creado correctamente",
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al crear el pasaje"
        })
    }
}

PasajeController.getPasajes = async (req, res) => {
    try {
        const pasajes = await Pasaje.find().populate("pasajero")
        res.status(200).json(pasajes)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener los pasajes"
        })
    }
}

PasajeController.deletePasaje = async (req, res) => {
    try {
        const pasaje = await Pasaje.findById(req.params.id)
        await Pasaje.findByIdAndDelete(pasaje._id)
        res.status(200).json({
            status: 1,
            msg: "Pasaje eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al eliminar el pasaje"
        })
    }
}

PasajeController.updatePasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body)
    try {
        //evaluar categorias
        var categoria = req.body.categoriaPasaje
        if (categoria && categoria != "m" && categoria != "a" && categoria != "j")
            throw new Error("Categoria de pasaje no valida")
        
        //evaluar dni
        const dni = req.body.dniPasajero
        const persona = await Persona.findOne({ dni: dni })
        
        if(persona) pasaje.pasajero = persona._id
        pasaje._id = req.params.id

        await Pasaje.updateOne({ _id: pasaje._id }, pasaje)
        res.status(200).json({
            status: 1,
            message: "Pasaje actualizado correctamente",
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al actualizar el pasaje"
        })
    }
}

PasajeController.filterPasajes = async (req, res) => {
    try {
        const categoria = req.query.categoria
        if(categoria && categoria != "m" && categoria != "a" && categoria != "j")
            throw new Error("Categoria de pasaje no valida")
        const pasajes = await Pasaje.find({ categoriaPasaje: categoria })
        res.status(200).json(pasajes)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al filtrar los pasajes"
        })
    }
}

module.exports = PasajeController