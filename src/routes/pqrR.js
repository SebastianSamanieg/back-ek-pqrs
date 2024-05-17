const express = require("express");
const router = express.Router(); //Manejador de rutas de express
const pqrSchema = require("../models/pqrM");
const verifyToken = require("./validate_token");

//Create - POST
router.post("/pqrs", verifyToken, (req, res) => {
    const pqr = pqrSchema(req.body);
    pqr
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Read - GET
router.get("/pqrs", verifyToken, (req, res) => {
    pqrSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Read - GET by ID
//Consultar un pqr por su id
router.get("/pqrs/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    pqrSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Update - PUT
//Modificar el nombre de un pqr por su id
router.put("/pqrs/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    const { numero, fecha, tipo, comentarios, anexo, estado, justificacion } = req.body;
    pqrSchema
        .updateOne({ _id: id }, {
            $set: { numero, fecha, tipo, comentarios, anexo, estado, justificacion }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// Delete - DELETE
router.delete("/pqrs/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    pqrSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;