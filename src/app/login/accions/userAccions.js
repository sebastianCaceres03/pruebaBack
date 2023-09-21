const pool = require('../../../config/database');
const bcrypt = require('bcryptjs');

exports.obtenerUsuario = async (id) => {
    const consulta = "select id,name,email from user where id = ?;";
    const respuesta = await pool.query(consulta, [id]);
    return respuesta[0];
}

exports.validarPassword = async (passwordActual, passwordDigitaByUser) => {
    if (passwordDigitaByUser == passwordActual) {
        return true;
    } else {
        return false;
    }
}
