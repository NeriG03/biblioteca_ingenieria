import RecepcionistaService from "../services/recepcionista.service.js";

const recepcionistaService = new RecepcionistaService();

const post = async (req, res) => {
    try{
        const recepcionista = await recepcionistaService.create(req.body);
        res.status(201).json(recepcionista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const recepcionista = await recepcionistaService.getAll();
        res.status(200).json(recepcionista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const recepcionista = await recepcionistaService.getById(req.params.id);
        res.status(200).json(recepcionista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const recepcionista = await recepcionistaService.update(req.params.id, req.body);
        res.status(200).json(recepcionista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const recepcionista = await recepcionistaService.delete(req.params.id);
        res.status(200).json(recepcionista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};