import express from "express";
import limpiezaControllers from "../controllers/limpieza.controllers.js";

const router = express.Router();

router
    .get('/limpieza', limpiezaControllers.get)
    .get('/limpieza/:id', limpiezaControllers.getById)
    .post('/limpieza', limpiezaControllers.post)
    .put('/limpieza/:id', limpiezaControllers.put)
    .delete('/limpieza/:id', limpiezaControllers.deleteById);

export default router;