import { Ayudante, Personal } from "../src/db/models/index.js";

class AyudanteService {
    constructor(){}

    async create(data){
        return await Ayudante.create(data);
    }

    async getAll(){
        return await Ayudante.findAll({
            include: Personal
            
        });
    }

    async getById(id){
        return await Ayudante.findByPk(id,{
            include: Personal
        });
    }

    async update(id, data){
        const ayudante = await Ayudante.findByPk(id);
        return await ayudante.update(data);
    }

    async delete(id){
        const ayudante = await Ayudante.findByPk(id);
        await ayudante.destroy();
        return {deleted: true};
    }
}


export default AyudanteService;

