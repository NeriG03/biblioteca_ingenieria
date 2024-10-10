import express from "express";
import revistaController from "../controllers/revista.controllers.js";

const router = express.Router();

router
    .get('/revista', revistaController.get)
    .get('/revista/:id', revistaController.getById)
    .post('/revista', revistaController.post)
    .put('/revista/:id', revistaController.put)
    .delete('/revista/:id', revistaController.deleteById);

export default router;









