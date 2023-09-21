const { Router } = require('express');
const router = Router();
const {register} = require('../controllers/registerController');
const {validateFields} = require('../accions/validationsRegister')


router.post('/',validateFields,register);

module.exports = router;
