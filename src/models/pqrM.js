const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
    // Información de la tarjeta de credito
    numero: {
        type: Number,
        required: true,
    },
    fechaVencimiento: {
        type: Date,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    cupo: {
        type: Number,
        required: true,
    },
    // Información del titular de la tarjeta
    nombre: {
        type: String,
        required: true,
    },
    contacto: {
        type: Number,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Card", cardSchema);
