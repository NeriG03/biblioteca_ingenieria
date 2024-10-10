import express from "express";
import ayudanteController from "../controllers/ayudante.controllers.js";

const router = express.Router();

router
    .get('/ayudante', ayudanteController.get)
    .get('/ayudante/:id', ayudanteController.getById)
    .post('/ayudante', ayudanteController.post)
    .put('/ayudante/:id', ayudanteController.put)
    .delete('/ayudante/:id', ayudanteController.deleteById);


export default router;


