const mongoose = require("mongoose");
const pqrSchema = mongoose.Schema({
    // Información del usuario
    usuario: {
        type: String,
        required: false,
    },
    correo: {
        type: String,
        required: true,
    },
    clave: {
        type: String,
        required: true,
    },
    // Información del pqr
    numero: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    comentarios: {
        type: String,
        required: true,
    },
    anexo: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    justificacion: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("PQR", pqrSchema);