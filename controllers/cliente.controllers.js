import ClienteService from "../services/cliente.service.js";

const clienteService = new ClienteService();

const post = async (req, res) => {
    try{
        const cliente = await clienteService.create(req.body);
        res.status(201).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const cliente = await clienteService.getAll();
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const cliente = await clienteService.getById(req.params.id);
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const cliente = await clienteService.update(req.params.id, req.body);
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const cliente = await clienteService.delete(req.params.id);
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};