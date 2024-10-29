import { selectAllTasks, insertTask, deleteTask } from '../models/Task.js';
import {emptyOrRows} from "../helper/utils.js";

const getTasks = async (req, res, next) => {
    try {
        const result = await selectAllTasks();
        return res.status(200).json(emptyOrRows(result));
    } catch (error) {
        return next(error);
    }
};

const postTask = async (req, res, next) => {
    try {
        if (!req.body.description || req.body.description.length === 0) {
            const error = new Error('Description is required');
            error.statusCode = 400;
            return next(error);
        }
        const result = await insertTask(req.body.description);
        return res.status(200).json({ id: result.rows[0].id });
    } catch (error) {
        return next(error);
    }
};

const deleteTaskById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        await deleteTask(id);
        return res.status(200).json({ id: id });
    } catch (error) {
        return next(error);
    }
};



export { getTasks, postTask, deleteTaskById };
