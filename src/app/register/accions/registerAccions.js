const pool = require('../../../config/database');

exports.createUser = async (name, email, password) => {
    const consulta = "INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES (NULL, ?, ?, ?)";
    const respuesta = await pool.query(consulta, [name, email, password]);
    return respuesta;
}
