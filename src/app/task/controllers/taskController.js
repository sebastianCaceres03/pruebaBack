const { createTask, getTask, updatetask, deleteTask } = require('../accions/taskAccions');

exports.getTask = async (req, res, next) => {
    const { id } = req.decoded.usuario;
    const result = await getTask(id)
    res.status(200).json({
        tasks: result
    });
}

exports.createTask = async (req, res, next) => {
    try {
        const { title, description, expiration_date } = req.body;
        const { id } = req.decoded.usuario;
        const result = await createTask(title, description, expiration_date, id, 'pending');
        res.status(200).json({
            mensaje: 'task created',
            type: 'create'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'internal error',
            type: 'error'
        });
    }
}

exports.updateTask = async (req, res, next) => {
    try {
        const { title, description, expiration_date, id, status } = req.body;
        //const { id } = req.decoded.usuario;
        const result = await updatetask(title, description, expiration_date, id, status)
        res.status(200).json({
            mensaje: 'task update',
            type: 'update'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'internal error',
            type: 'error'
        });
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteTask(id);
        res.status(200).json({
            mensaje: 'delete',
            type: 'ok'
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: 'internal error',
            type: 'error'
        });
    }
}

