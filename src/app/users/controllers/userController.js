const pool = require('../../../config/database');
const { obtenerUsuario } = require('../accions/userAccions');

exports.getUser = async (req, res, next) => {
    try {
        const { id } = req.decoded.usuario;
        const result = await obtenerUsuario(id);
        res.json({
            user : result
        });

    } catch (error) {
        next();
    }
}
