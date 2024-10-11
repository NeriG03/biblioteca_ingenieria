import { Recepcionista, Personal } from "../src/db/models/index.js";

class RecepcionistaService {
    constructor(){}

    async create(data){
        return await Recepcionista.create(data);
    }

    async getAll(){
        return await Recepcionista.findAll({
            include: Personal
            
        });
    }

    async getById(id){
        return await Recepcionista.findByPk(id,{
            include: Personal
        });
    }

    async update(id, data){
        const recepcionista = await Recepcionista.findByPk(id);
        return await recepcionista.update(data);
    }

    async delete(id){
        const recepcionistaService = await Recepcionista.findByPk(id);
        await recepcionistaService.destroy();
        return {deleted: true};
    }
}


export default RecepcionistaService;