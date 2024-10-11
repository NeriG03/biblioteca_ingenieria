import reservacionController from '../controllers/reservacion.controllers.js';

import express from 'express';

const router = express.Router();

router
    .post('/reservacion', reservacionController.post)
    .get('/reservacion', reservacionController.get)
    .get('/reservacion/:id', reservacionController.getById)
    .put('/reservacion/:id', reservacionController.put)
    .delete('/reservacion/:id', reservacionController.deleteById);

export default router;