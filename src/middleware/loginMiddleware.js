const jwt = require('jsonwebtoken');
const confing = require('../config/config');
const express = require('express');
const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
  const token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, confing.llave, (err, decoded) => {
      if (err) {
        return res.status('401').json({ mensaje: 'Token inválida' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status('401').json({
      mensaje: 'Token no proveída.'
    });
  }
});

module.exports = rutasProtegidas;
