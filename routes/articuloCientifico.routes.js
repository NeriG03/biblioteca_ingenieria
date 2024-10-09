import express from "express";
import articuloCientificoController from "../controllers/articuloCientifico.constrollers.js";

const router = express.Router();

router
    .get('/articuloCientifico', articuloCientificoController.get)
    .get('/articuloCientifico/:id', articuloCientificoController.getById)
    .post('/articuloCientifico', articuloCientificoController.post)
    .put('/articuloCientifico/:id', articuloCientificoController.put)
    .delete('/articuloCientifico/:id', articuloCientificoController.deleteById);


export default router;