import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "libro";

class Libro extends Model {
    static config(sequelize) {
        return {
        sequelize,
        tableName: TABLE_NAME,
        modelName: "Libro",
        timestamps: true,
        };
    }
}

const LibroSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'genero'
    }
}

export { Libro, LibroSchema };
