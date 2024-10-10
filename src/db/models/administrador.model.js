import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "administrador";

class Administrador extends Model {
    static config(sequelize) {
        return {
        sequelize,
        tableName: TABLE_NAME,
        modelName: "Administrador",
        timestamps: true,
        };
    }
}

const AdministradorSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}

export { Administrador, AdministradorSchema };


