import e from 'express';
import {Model, DataTypes} from 'sequelize';

const TABLE_NAME = 'multa';

class Multa extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'Multa',
            timestamps: true
        }
    }
}

const MultaSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    diasRetraso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    monto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}

export {Multa, MultaSchema};
