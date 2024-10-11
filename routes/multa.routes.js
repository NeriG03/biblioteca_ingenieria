import express from "express";
import multaControllers from "../controllers/multa.controllers.js";

const router = express.Router();

router
    .post('/multa', multaControllers.post)
    .get('/multa', multaControllers.get)
    .get('/multa/:id', multaControllers.getById)
    .put('/multa/:id', multaControllers.put)
    .delete('/multa/:id', multaControllers.deleteById);

export default router;

