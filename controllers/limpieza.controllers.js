import LimpiezaService from "../services/limpieza.service.js";

const limpiezaService = new LimpiezaService();

const post = async (req, res) => {
    try{
        const limpieza = await limpiezaService.create(req.body);
        res.status(201).json(limpieza);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const limpieza = await limpiezaService.getAll();
        res.status(200).json(limpieza);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const limpieza = await limpiezaService.getById(req.params.id);
        res.status(200).json(limpieza);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const limpieza = await limpiezaService.update(req.params.id, req.body);
        res.status(200).json(limpieza);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const limpieza = await limpiezaService.delete(req.params.id);
        res.status(200).json(limpieza);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};