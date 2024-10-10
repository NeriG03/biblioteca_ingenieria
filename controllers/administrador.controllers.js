import AdministradorService from "../services/administrador.service.js";

const administradorService = new AdministradorService();

const post = async (req, res) => {
    try{
        const administrador = await administradorService.create(req.body);
        res.status(201).json(administrador);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const administrador = await administradorService.getAll();
        res.status(200).json(administrador);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const administrador = await administradorService.getById(req.params.id);
        res.status(200).json(administrador);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const administrador = await administradorService.update(req.params.id, req.body);
        res.status(200).json(administrador);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const administrador = await administradorService.delete(req.params.id);
        res.status(200).json(administrador);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};