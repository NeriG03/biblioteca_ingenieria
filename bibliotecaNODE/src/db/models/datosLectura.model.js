import {Model, DataTypes} from 'sequelize';

const TABLE_NAME = 'datosLectura';

class DatosLectura extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'DatosLectura',
            timestamps: true
        }
    }
}

const DatosLecturaSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nombre'
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'autor'
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'editorial'
    },
    yearPublicacion: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'yearPublicacion'
    },
    numTomo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'numTomo'
    },
    paisPublicacion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'paisPublicacion'
    }
}

export {DatosLectura, DatosLecturaSchema};



