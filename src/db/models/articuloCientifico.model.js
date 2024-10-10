import {Model, DataTypes} from 'sequelize';

const TABLE_NAME = 'articuloCientifico';


class ArticuloCientifico extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'ArticuloCientifico',
            timestamps: true
        }
    }
}


const ArticuloCientificoSchema = {
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



export {ArticuloCientifico, ArticuloCientificoSchema};