const pool = require('../../../config/database');

exports.createTask = async (title,description,expiration_date,user_id,status) => {
    const consulta = "INSERT INTO `task` (`id`, `title`, `description`, `expiration_date`, `user_id`, `status`) VALUES (NULL, ?, ?, ?, ?, ?)";
    const respuesta = await pool.query(consulta, [title,description,expiration_date,user_id,status]);
    return respuesta;
}


exports.getTask = async (user_id) => {
    const consulta = "select * from task where user_id = ?";
    const respuesta = await pool.query(consulta, [user_id]);
    return respuesta;
}

exports.updatetask = async (title,description,expiration_date,id,status) =>{
    const consulta = "UPDATE `task` SET `title` = ?, `description` = ?, `expiration_date` = ?, `status` = ? WHERE `task`.`id` = ?";
    const respuesta = await pool.query(consulta, [title,description,expiration_date,status,id]);
    return respuesta;
}

exports.deleteTask = async (id) =>{
    const consulta = "DELETE FROM task WHERE `task`.`id` = ?";
    const respuesta = await pool.query(consulta, [id]);
    console.log(respuesta);
    return respuesta;
}
