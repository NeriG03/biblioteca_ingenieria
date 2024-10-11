import { Multa, Reservacion, Cliente, Recepcionista, Personal, DatosLectura} from "../src/db/models/index.js";

class MultaService {
    async create(multa) {
        return Multa.create(multa);
    }

    async getAll() {
        return Multa.findAll({
            include: [ 
                {
                    model: Reservacion,
                    include: [
                        {
                            model: Cliente
                        },
                        {
                            model: Recepcionista,
                            include: [Personal]
                        },
                        {
                            model: DatosLectura
                        }
                    ]
                } 
            ]
        });
    }

    async getById(id) {
        return Multa.findByPk(id,{
            include: [ 
                {
                    model: Reservacion,
                    include: [
                        {
                            model: Cliente
                        },
                        {
                            model: Recepcionista,
                            include: [Personal]
                        },
                        {
                            model: DatosLectura
                        }
                    ]
                } 
            ]
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