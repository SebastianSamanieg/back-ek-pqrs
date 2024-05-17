const mongoose = require("mongoose");
const pqrSchema = mongoose.Schema({
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
        default: "Enviado",
    },
    justificacion: {
        type: String,
        required: false,
    },
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId, ref : 'User',
        required: true,
    },
    idGestor: {
        type: mongoose.Schema.Types.ObjectId, ref : 'User',
        required: false,
    },
});
module.exports = mongoose.model("PQR", pqrSchema);