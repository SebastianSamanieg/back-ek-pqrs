const express = require("express");
const router = express.Router(); //Manejador de rutas de express
const cardSchema = require("../models/cardM");

//Create - POST
router.post("/cards", (req, res) => {
    const card = cardSchema(req.body);
    card
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Read - GET
router.get("/cards", (req, res) => {
    cardSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Read - GET by ID
//Consultar un card por su id
router.get("/cards/:id", (req, res) => {
    const { id } = req.params;
    cardSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Update - PUT
//Modificar el nombre de un card por su id
router.put("/cards/:id", (req, res) => {
    const { id } = req.params;
    const { numero, fechaVencimiento, cvv, tipo, cupo, nombre, contacto, coreo } = req.body;
    cardSchema
        .updateOne({ _id: id }, {
            $set: { numero, fechaVencimiento, cvv, tipo, cupo, nombre, contacto, coreo }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// Delete - DELETE
router.delete("/cards/:id", (req, res) => {
    const { id } = req.params;
    cardSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;