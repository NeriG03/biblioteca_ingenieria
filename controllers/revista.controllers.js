import RevistaService from "../services/revista.service.js";

const revistaService = new RevistaService();

const post = async (req, res) => {
    try{
        const revista = await revistaService.create(req.body);
        res.status(201).json(revista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const revista = await revistaService.getAll();
        res.status(200).json(revista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const revista = await revistaService.getById(req.params.id);
        res.status(200).json(revista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const revista = await revistaService.update(req.params.id, req.body);
        res.status(200).json(revista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const revista = await revistaService.delete(req.params.id);
        res.status(200).json(revista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};