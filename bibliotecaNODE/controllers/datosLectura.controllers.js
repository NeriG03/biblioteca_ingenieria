import DatosLecturaService from "../services/datosLectura.service.js";

const datosLecturaService = new DatosLecturaService();

const post = async (req, res) => {
    try{
        const datosLectura = await datosLecturaService.create(req.body);
        res.status(201).json(datosLectura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const datosLectura = await datosLecturaService.getAll();
        res.status(200).json(datosLectura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const datosLectura = await datosLecturaService.getById(req.params.id);
        res.status(200).json(datosLectura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const datosLectura = await datosLecturaService.update(req.params.id, req.body);
        res.status(200).json(datosLectura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const datosLectura = await datosLecturaService.delete(req.params.id);
        res.status(200).json(datosLectura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}


export default {post, get, getById, put, deleteById};









