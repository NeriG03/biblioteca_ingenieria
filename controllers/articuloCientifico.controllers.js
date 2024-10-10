import ArticuloCientificoService from "../services/articuloCientifico.service.js";

const articuloCientificoService = new ArticuloCientificoService();

const post = async (req, res) => {
    try{
        const articuloCientifico = await articuloCientificoService.create(req.body);
        res.status(201).json(articuloCientifico);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const articuloCientifico = await articuloCientificoService.getAll();
        res.status(200).json(articuloCientifico);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const articuloCientifico = await articuloCientificoService.getById(req.params.id);
        res.status(200).json(articuloCientifico);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const articuloCientifico = await articuloCientificoService.update(req.params.id, req.body);
        res.status(200).json(articuloCientifico);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const articuloCientifico = await articuloCientificoService.delete(req.params.id);
        res.status(200).json(articuloCientifico);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};

