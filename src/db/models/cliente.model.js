import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "cliente";

class Cliente extends Model {
    static config(sequelize) {
        return {
        sequelize,
        tableName: TABLE_NAME,
        modelName: "Cliente",
        timestamps: true,
        };
    }
}

const ClienteSchema = {
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
    apellido_pat: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'apellido_pat'
    },
    apellido_mat: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'apellido_mat'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'telefono'
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'direccion'
    }
}

export { Cliente, ClienteSchema };




