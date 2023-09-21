const { generarToken } = require('../../../services/jwt');
const pool = require('../../../config/database');
const { validarPassword, obtenerUsuario } = require('../accions/loginAccions');

exports.login = async (req, res, next) => {
    try {
        const sql = "select id,password,email from user where email = ? limit 1;";
        const consulta = await pool.query(sql, [req.body.email]);
        console.log(consulta);
        console.log(req.body);
        if (consulta.length > 0) {
            const validar = await validarUser(consulta[0].password, req.body.password);
            if (validar) {
                const user = await obtenerUsuario(consulta[0].id);
                const token = await generarToken(user)
                console.log(user)
                res.json({
                    mensaje: 'Autenticación correcta',
                    token: token,
                    user : user,
                });
            } else {
                next();
            }
        } else {
            next();
        }
    } catch (error) {
        next();
    }
}

validarUser = async (consultaPassword, password) => {
    console.log(consultaPassword);
    console.log(password);
    if (await validarPassword(consultaPassword, password)) {
        return true;
    } else {
        return false;
    }
}
