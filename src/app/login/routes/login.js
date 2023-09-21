const { Router } = require('express');
const router = Router();
const {login} = require('../controllers/login');

const {errorLogin} = require('../controllers/errorLogin');


router.post('/',login,errorLogin);

module.exports = router;
