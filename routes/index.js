import express from "express";
import datosLecturaRouter from "../routes/datosLectura.routes.js";
import articuloCientificoRouter from "../routes/articuloCientifico.routes.js";
import revistaRouter from "../routes/revista.routes.js";
import libroRouter from "../routes/libro.routes.js";
import personalRouter from "../routes/personal.routes.js";
import limpiezaRouter from "./limpieza.routes.js"
import recepcionistaRouter from "./recepcionista.routes.js"
import ayudanteRouter from "./ayudante.routes.js"
import administradorRouter from "./administrador.routes.js"
import clienteRouter from "./cliente.routes.js"
import reservacionRouter from "./reservacion.routes.js"

function routes(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('',datosLecturaRouter);
    router.use('',articuloCientificoRouter);
    router.use('',revistaRouter);
    router.use('',libroRouter);
    router.use('',personalRouter);
    router.use('',limpiezaRouter);
    router.use('',recepcionistaRouter);
    router.use('',ayudanteRouter);
    router.use('',administradorRouter);
    router.use('',clienteRouter);
    router.use('',reservacionRouter);

}


export default routes;

