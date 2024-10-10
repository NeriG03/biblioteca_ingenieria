import { Model, DataTypes } from 'sequelize';

const TABLE_NAME = 'limpieza';

class Limpieza extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'Limpieza',
            timestamps: true
        }
    }
}


const LimpiezaSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}


export { Limpieza, LimpiezaSchema };





