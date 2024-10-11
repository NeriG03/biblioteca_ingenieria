import recepcionistaController from '../controllers/recepcionista.controller.js';

import express from 'express';

const router = express.Router();

router
    .post('/reservacion', recepcionistaController.post)
    .get('/reservacion', recepcionistaController.get)
    .get('/reservacion/:id', recepcionistaController.getById)
    .put('/reservacion/:id', recepcionistaController.put)
    .delete('/reservacion/:id', recepcionistaController.deleteById);

export default router;