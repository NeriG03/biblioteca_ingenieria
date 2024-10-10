import PersonalService from "../services/personal.service.js";

const personalService = new PersonalService();

const post = async (req, res) => {
    try{
        const personal = await personalService.create(req.body);
        res.status(201).json(personal);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const get = async (req, res) => {
    try{
        const personal = await personalService.getAll();
        res.status(200).json(personal);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const personal = await personalService.getById(req.params.id);
        res.status(200).json(personal);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const put = async (req, res) => {
    try{
        const personal = await personalService.update(req.params.id, req.body);
        res.status(200).json(personal);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const deleteById = async (req, res) => {
    try{
        const personal = await personalService.delete(req.params.id);
        res.status(200).json(personal);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default {post, get, getById, put, deleteById};