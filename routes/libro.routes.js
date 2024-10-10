import express from "express";
import libroController from "../controllers/libro.controllers.js";

const router = express.Router();

router
    .get('/libro', libroController.get)
    .get('/libro/:id', libroController.getById)
    .post('/libro', libroController.post)
    .put('/libro/:id', libroController.put)
    .delete('/libro/:id', libroController.deleteById);

export default router;

