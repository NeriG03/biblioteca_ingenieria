import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "reservacion";

class Reservacion extends Model {
    static config(sequelize) {
        return {
        sequelize,
        tableName: TABLE_NAME,
        modelName: "Reservacion",
        timestamps: true,
        };
    }
}

const ReservacionSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_inicio'
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_fin'
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'estado'
    }
}


export {Reservacion, ReservacionSchema};

