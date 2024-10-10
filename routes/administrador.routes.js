import express from "express";
import administradorController from "../controllers/administrador.controllers.js";

const router = express.Router();

router
    .get('/administrador', administradorController.get)
    .get('/administrador/:id', administradorController.getById)
    .post('/administrador', administradorController.post)
    .put('/administrador/:id', administradorController.put)
    .delete('/administrador/:id', administradorController.deleteById);

export default router;


