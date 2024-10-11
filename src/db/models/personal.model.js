import { Model, DataTypes } from 'sequelize';

const TABLE_NAME = 'personal';

class Personal extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'Personal',
            timestamps: true
        }
    }
}

const PersonalSchema = {
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
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'telefono'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'direccion'
    },
    hora_entrada: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'hora_entrada'
    },
    hora_salida: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'hora_salida'
    },
    salario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'salario'
    },
}


export { Personal, PersonalSchema };

