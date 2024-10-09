import {DatosLectura} from "../src/db/models/index.js";


class DatosLecturaService {
    constructor(){}

    async create(data){
        return await DatosLectura.create(data);
    }

    async getAll(){
        return await DatosLectura.findAll();
    }

    async getById(id){
        return await DatosLectura.findByPk(id);
    }

    async update(id, data){
        const DatosLectura = await DatosLectura.findByPk(id);
        return await DatosLectura.update(data);
    }

    async delete(id){
        const DatosLectura = await DatosLectura.findByPk(id);
        await DatosLectura.destroy();
        return {deleted: true};
    }

}



export default DatosLecturaService;