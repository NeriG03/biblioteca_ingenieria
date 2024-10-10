import express from "express";
import recepcionistaController from "../controllers/recepcionista.controllers.js";

const router = express.Router();

router
    .get('/recepcionista', recepcionistaController.get)
    .get('/recepcionista/:id', recepcionistaController.getById)
    .post('/recepcionista', recepcionistaController.post)
    .put('/recepcionista/:id', recepcionistaController.put)
    .delete('/recepcionista/:id', recepcionistaController.deleteById);

export default router;





