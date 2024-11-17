import { DatosLectura } from "../src/db/models/index.js";

class DatosLecturaService {
    constructor() {}

    async create(data) {
        return await DatosLectura.create(data);
    }

    async getAll() {
        return await DatosLectura.findAll();
    }

    async getById(id) {
        return await DatosLectura.findByPk(id);
    }

    async update(id, data) {
        const lectura = await DatosLectura.findByPk(id);
        if (!lectura) {
            throw new Error('Lectura not found');
        }
        return await lectura.update(data);
    }

    async delete(id) {
        const lectura = await DatosLectura.findByPk(id);
        if (!lectura) {
            throw new Error('Lectura not found');
        }
        await lectura.destroy();
        return { deleted: true };
    }
}

export default DatosLecturaService;