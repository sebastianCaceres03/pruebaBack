const { generarToken } = require('../../../services/jwt');
const { createUser } = require('../accions/registerAccions');
const { obtenerUsuario } = require('../../login/accions/loginAccions');


exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const result = await createUser(name, email, password);
        const user = await obtenerUsuario(result['insertId']);
        const token = await generarToken(user)
        console.log(user)
        res.status(200).json({
            mensaje: 'Autenticación correcta',
            token: token,
            user: user,
            mensaje: 'user create',
            type: 'create'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'email already exist',
            type: 'error'
        });
    }
}
