import MultaService from "../services/multa.service.js";
import ReservacionService from "../services/reservacion.service.js";

const multaService = new MultaService();

const post = async (req, res) => {
    try{
        const reservacionService = new ReservacionService();
        const reservacion = await reservacionService.getById(req.body.ReservacionId);
        if (reservacion || reservacion.estado) {
            const multa = await multaService.create(req.body);
            res.status(201).json(multa);
        }
    } catch (error){
        res.status(400).json({message: "La reservación no existe o no es apta para una multa"});
    }
}

const get = async (req, res) => {
    try{
        const multa = await multaService.getAll();
        res.status(200).json(multa);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const multa = await multaService.getById(req.params.id);
        res.status(200).json(multa);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}


const put = async (req, res) => {
    try{
        const multa = await multaService.update(req.params.id, req.body);
        res.status(200).json(multa);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}


const deleteById = async (req, res) => {
    try{
        const multa = await multaService.delete(req.params.id);
        res.status(200).json(multa);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};