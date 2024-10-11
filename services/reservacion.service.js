import { Cliente, Reservacion , Recepcionista, DatosLectura} from "../src/db/models/index.js";


class ReservacionService {
    async create(reservacion) {
        return Reservacion.create(reservacion);
    }

    async getAll() {
        return Reservacion.findAll({
            include: [ Cliente, Recepcionista, DatosLectura ]
        });
    }

    async getById(id) {
        return Reservacion.findByPk(id,{
            include: [ Cliente, Recepcionista, DatosLectura ]
        });
    }

    async update(id, reservacion) {
        return Reservacion.update(reservacion, {
            where: {
                id,
            },
        });
    }

    async delete(id) {
        return Reservacion.destroy({
            where: {
                id,
            },
        });
    }
}


export default ReservacionService