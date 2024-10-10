import AyudanteService from "../services/ayudante.service.js";

const ayudanteService = new AyudanteService();

const post = async (req, res) => {
    try{
        const ayudante = await ayudanteService.create(req.body);
        res.status(201).json(ayudante);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const ayudante = await ayudanteService.getAll();
        res.status(200).json(ayudante);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const ayudante = await ayudanteService.getById(req.params.id);
        res.status(200).json(ayudante);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const ayudante = await ayudanteService.update(req.params.id, req.body);
        res.status(200).json(ayudante);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const ayudante = await ayudanteService.delete(req.params.id);
        res.status(200).json(ayudante);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};