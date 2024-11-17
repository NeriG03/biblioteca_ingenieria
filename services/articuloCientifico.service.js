import { ArticuloCientifico, DatosLectura } from "../src/db/models/index.js";

class ArticuloCientificoService {
    constructor(){}

    async create(data){
        return await ArticuloCientifico.create(data);
    }

    async getAll(){
        return await ArticuloCientifico.findAll({
            include: [{
                model: DatosLectura
            }]
        });
    }

    async getById(id){
        return await ArticuloCientifico.findByPk(id,{
            include: DatosLectura
        });
    }

    async update(id, data){
        const articuloCientifico = await ArticuloCientifico.findByPk(id);
        return await articuloCientifico.update(data);
    }

    async delete(id){
        const articuloCientifico = await ArticuloCientifico.findByPk(id);
        await articuloCientifico.destroy();
        return {deleted: true};
    }
}


export default ArticuloCientificoService;
