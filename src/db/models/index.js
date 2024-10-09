import {DatosLectura, DatosLecturaSchema} from "./datosLectura.model.js";
import { Sequelize } from "sequelize";
import config from "../../config/config.js";


function setUpModels(sequelize){
    DatosLectura.init(DatosLecturaSchema, DatosLectura.config(sequelize));
}

const sequelize = new Sequelize(
    config.dbName, 
    config.dbUser, 
    config.dbPassword, {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres'
});

/* const sequelize = new Sequelize(
    'bilbiotecaNODE', 
    'postgres', 
    '1234', {
    host: 'localhost',
    port: '5433',
    dialect: 'postgres'
}); */

sequelize.sync();
setUpModels(sequelize);


export {
    setUpModels,
    DatosLectura
}