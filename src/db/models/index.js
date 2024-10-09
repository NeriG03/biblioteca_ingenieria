import { Sequelize } from "sequelize";
import config from "../../config/config.js";
import {DatosLectura, DatosLecturaSchema} from "./datosLectura.model.js";
import { ArticuloCientifico, ArticuloCientificoSchema } from "./articuloCientifico.model.js";



function setUpModels(sequelize){
    //Inicializar los modelos/tablas
    DatosLectura.init(DatosLecturaSchema, DatosLectura.config(sequelize));
    ArticuloCientifico.init(ArticuloCientificoSchema, ArticuloCientifico.config(sequelize));
    // Relaciones
    DatosLectura.hasOne(ArticuloCientifico);
    ArticuloCientifico.belongsTo(DatosLectura);

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
    DatosLectura,
    ArticuloCientifico
}