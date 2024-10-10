import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "ayudante";

class Ayudante extends Model {
    static config(sequelize) {
        return {
        sequelize,
        tableName: TABLE_NAME,
        modelName: "Ayudante",
        timestamps: true,
        };
    }
}


const AyudanteSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}

export { Ayudante, AyudanteSchema };

