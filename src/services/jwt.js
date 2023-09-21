const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generarToken = async (usuario) => {
    const payload = {
        usuario : usuario,
        check: true
      };
      const token = jwt.sign(payload,config.llave, {
        expiresIn: Math.floor(Date.now() / 1000) + (60 * 60 * 15)
      });
      return token;
}
