import ReservacionService from "../services/reservacion.service.js";

const reservacionService = new ReservacionService();

const post = async (req, res) => {
    try{
        const reservacion = await reservacionService.create(req.body);
        res.status(201).json(reservacion);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const reservacion = await reservacionService.getAll();
        res.status(200).json(reservacion);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const reservacion = await reservacionService.getById(req.params.id);
        res.status(200).json(reservacion);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const reservacion = await reservacionService.update(req.params.id, req.body);
        res.status(200).json(reservacion);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const reservacion = await reservacionService.delete(req.params.id);
        res.status(200).json(reservacion);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}


export default {post, get, getById, put, deleteById};

