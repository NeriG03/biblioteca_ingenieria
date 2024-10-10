import { Sequelize } from "sequelize";
import config from "../../config/config.js";
import {DatosLectura, DatosLecturaSchema} from "./datosLectura.model.js";
import { ArticuloCientifico, ArticuloCientificoSchema } from "./articuloCientifico.model.js";
import { Revista, RevistaSchema } from "./revista.model.js"
import { Libro, LibroSchema } from "./libro.model.js";
import { Personal, PersonalSchema } from "./personal.model.js";
import { Limpieza, LimpiezaSchema } from "./limpieza.model.js";
import { Recepcionista, RecepcionistaSchema } from "./recepcionista.model.js";
import { Ayudante, AyudanteSchema } from "./ayudante.model.js";



function setUpModels(sequelize){
    //Inicializar los modelos/tablas
    DatosLectura.init(DatosLecturaSchema, DatosLectura.config(sequelize));
    ArticuloCientifico.init(ArticuloCientificoSchema, ArticuloCientifico.config(sequelize));
    Revista.init(RevistaSchema, Revista.config(sequelize));
    Libro.init(LibroSchema, Libro.config(sequelize));
    Personal.init(PersonalSchema, Personal.config(sequelize));
    Limpieza.init(LimpiezaSchema, Limpieza.config(sequelize));
    Recepcionista.init(RecepcionistaSchema, Recepcionista.config(sequelize));
    Ayudante.init(AyudanteSchema, Ayudante.config(sequelize));


    //Relaciones
    DatosLectura.hasOne(ArticuloCientifico);
    ArticuloCientifico.belongsTo(DatosLectura);

    DatosLectura.hasOne(Revista);
    Revista.belongsTo(DatosLectura);

    DatosLectura.hasOne(Libro);
    Libro.belongsTo(DatosLectura);

    Personal.hasOne(Limpieza);
    Limpieza.belongsTo(Personal);

    Personal.hasOne(Recepcionista);
    Recepcionista.belongsTo(Personal);

    Personal.hasOne(Ayudante);
    Ayudante.belongsTo(Personal);

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
    ArticuloCientifico,
    Revista,
    Libro,
    Personal,
    Limpieza,
    Recepcionista,
    Ayudante
}