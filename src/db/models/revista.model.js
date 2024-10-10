import {Model, DataTypes} from 'sequelize';

const TABLE_NAME = 'revista';

class Revista extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'Revista',
            timestamps: true
        }
    }
}

const RevistaSchema = {
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

export {Revista, RevistaSchema};


