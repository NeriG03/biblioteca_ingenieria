import { Multa, Reservacion } from "../src/db/models/index.js";

class MultaService {
    async create(multa) {
        return Multa.create(multa);
    }

    async getAll() {
        return Multa.findAll({
            include: [ Reservacion ]
        });
    }

    async getById(id) {
        return Multa.findByPk(id,{
            include: [ Reservacion ]
        });
    }

    async update(id, multa) {
        return Multa.update(multa, {
            where: {
                id,
            },
        });
    }

    async delete(id) {
        return Multa.destroy({
            where: {
                id,
            },
        });
    }
}

export default MultaService