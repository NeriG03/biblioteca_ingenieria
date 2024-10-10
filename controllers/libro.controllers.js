import LibroService from "../services/libro.service.js";

const libroService = new LibroService();

const post = async (req, res) => {
    try{
        const libro = await libroService.create(req.body);
        res.status(201).json(libro);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const libro = await libroService.getAll();
        res.status(200).json(libro);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const libro = await libroService.getById(req.params.id);
        res.status(200).json(libro);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const libro = await libroService.update(req.params.id, req.body);
        res.status(200).json(libro);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const libro = await libroService.delete(req.params.id);
        res.status(200).json(libro);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};