const pool = require('../../../config/database');

exports.obtenerUsuario = async (id) => {
    const consulta = "select id,name,email from user where id = ?;";
    const respuesta = await pool.query(consulta, [id]);
    return respuesta[0];
}

