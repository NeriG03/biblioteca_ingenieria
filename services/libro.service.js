import {Libro, DatosLectura} from '../src/db/models/index.js';

class LibroService {
    constructor(){}

    async create(data){
        return await Libro.create(data);
    }

    async getAll(){
        return await Libro.findAll({
            include: [{
                model: DatosLectura
            }]
        });
    }

    async getById(id){
        return await Libro.findByPk(id,{
            include: DatosLectura
        });
    }

    async update(id, data){
        const libro = await Libro.findByPk(id);
        return await libro.update(data);
    }

    async delete(id){
        const libro = await Libro.findByPk(id);
        await libro.destroy();
        return {deleted: true};
    }
}

export default LibroService;

