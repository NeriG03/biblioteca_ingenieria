import express from "express";
import datosLecturaRouter from "../routes/datosLectura.routes.js";
import articuloCientificoRouter from "../routes/articuloCientifico.routes.js";


function routes(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('',datosLecturaRouter);
    router.use('',articuloCientificoRouter);
}


export default routes;

