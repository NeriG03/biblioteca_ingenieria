import { Cliente } from "../src/db/models/index.js";

class ClienteService {
    constructor(){}

    async create(data){
        return await Cliente.create(data);
    }

    async getAll(){
        return await Cliente.findAll();
    }

    async getById(id){
        return await Cliente.findByPk(id);
    }

    async update(id, data){
        const cliente = await Cliente.findByPk(id);
        return await cliente.update(data);
    }

    async delete(id){
        const cliente = await Cliente.findByPk(id);
        await cliente.destroy();
        return {deleted: true};
    }
}

export default ClienteService;