import express from "express";
import datosLecturaRouter from "../routes/datosLectura.routes.js";
import articuloCientificoRouter from "../routes/articuloCientifico.routes.js";
import revistaRouter from "../routes/revista.routes.js";
import libroRouter from "../routes/libro.routes.js";
import personalRouter from "../routes/personal.routes.js";

function routes(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('',datosLecturaRouter);
    router.use('',articuloCientificoRouter);
    router.use('',revistaRouter);
    router.use('',libroRouter);
    router.use('',personalRouter);
}


export default routes;

