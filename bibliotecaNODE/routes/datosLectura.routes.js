import express from "express";
import datosLecturaController from "../controllers/datosLectura.controllers.js";

const router = express.Router();

router
    .get('/datosLectura', datosLecturaController.get)
    .get('/datosLectura/:id', datosLecturaController.getById)
    .post('/datosLectura', datosLecturaController.post)
    .put('/datosLectura/:id', datosLecturaController.put)
    .delete('/datosLectura/:id', datosLecturaController.deleteById);


export default router;




