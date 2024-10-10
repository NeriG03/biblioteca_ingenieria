import { Limpieza, Personal } from "../src/db/models/index.js";

class LimpiezaService {
    constructor(){}

    async create(data){
        return await Limpieza.create(data);
    }

    async getAll(){
        return await Limpieza.findAll({
            include: Personal
            
        });
    }

    async getById(id){
        return await Limpieza.findByPk(id,{
            include: Personal
        });
    }

    async update(id, data){
        const limpieza = await Limpieza.findByPk(id);
        return await limpieza.update(data);
    }

    async delete(id){
        const limpieza = await Limpieza.findByPk(id);
        await limpieza.destroy();
        return {deleted: true};
    }
}


export default LimpiezaService;