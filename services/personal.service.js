import { Personal } from "../src/db/models/index.js";


class PersonalService {
    constructor(){}

    async create(data){
        return await Personal.create(data);
    }

    async getAll(){
        return await Personal.findAll();
    }

    async getById(id){
        return await Personal.findByPk(id);
    }

    async update(id, data){
        const personal = await Personal.findByPk(id);
        return await personal.update(data);
    }

    async delete(id){
        const personal = await Personal.findByPk(id);
        await personal.destroy();
        return {deleted: true};
    }
}

export default PersonalService;