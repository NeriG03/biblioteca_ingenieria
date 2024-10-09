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
        const ArticuloCientifico = await ArticuloCientifico.findByPk(id);
        return await ArticuloCientifico.update(data);
    }

    async delete(id){
        const ArticuloCientifico = await ArticuloCientifico.findByPk(id);
        await ArticuloCientifico.destroy();
        return {deleted: true};
    }
}


export default ArticuloCientificoService;
