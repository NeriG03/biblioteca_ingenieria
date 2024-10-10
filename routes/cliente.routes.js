import express from "express";
import clienteController from "../controllers/cliente.controllers.js";
const router = express.Router();

router
    .get('/cliente', clienteController.get)
    .get('/cliente/:id', clienteController.getById)
    .post('/cliente', clienteController.post)
    .put('/cliente/:id', clienteController.put)
    .delete('/cliente/:id', clienteController.deleteById);

export default router;

