import { Administrador, Personal } from "../src/db/models/index.js";

class AdministradorService {
    constructor(){}

    async create(data){
        return await Administrador.create(data);
    }

    async getAll(){
        return await Administrador.findAll(
            {include: Personal}
        );
    }

    async getById(id){
        return await Administrador.findByPk(id,{
            include: Personal
        });
    }

    async update(id, data){
        const administrador = await Administrador.findByPk(id);
        return await administrador.update(data);
    }

    async delete(id){
        const administrador = await Administrador.findByPk(id);
        await administrador.destroy();
        return {deleted: true};
    }
}


export default AdministradorService;