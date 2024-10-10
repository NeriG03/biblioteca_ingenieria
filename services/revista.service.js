import {Revista, DatosLectura} from "../src/db/models/index.js";

class RevistaService {
    constructor(){}

    async create(data){
        return await Revista.create(data);
    }

    async getAll(){
        return await Revista.findAll({
            include: [{
                model: DatosLectura
            }]
        });
    }

    async getById(id){
        return await Revista.findByPk(id,{
            include: DatosLectura
        });
    }

    async update(id, data){
        const revista = await Revista.findByPk(id);
        return await revista.update(data);
    }

    async delete(id){
        const revista = await Revista.findByPk(id);
        await revista.destroy();
        return {deleted: true};
    }
}

export default RevistaService;