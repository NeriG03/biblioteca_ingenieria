import express from "express";
import personalControllers from "../controllers/personal.controllers.js";

const router = express.Router();

router
    .get('/personal', personalControllers.get)
    .get('/personal/:id', personalControllers.getById)
    .post('/personal', personalControllers.post)
    .put('/personal/:id', personalControllers.put)
    .delete('/personal/:id', personalControllers.deleteById);

export default router;