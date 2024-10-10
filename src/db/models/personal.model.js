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
    apellidoPat: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'apellido'
    },
    apellidoMat: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'apellido'
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
    horaEntrada: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'hora_entrada'
    },
    horaSalida: {
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

