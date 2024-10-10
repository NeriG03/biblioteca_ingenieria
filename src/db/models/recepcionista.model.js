import { Model, DataTypes } from 'sequelize';

const TABLE_NAME = 'recepcionista';

class Recepcionista extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'Recepcionista',
            timestamps: true
        }
    }
}

const RecepcionistaSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}

export { Recepcionista, RecepcionistaSchema };





