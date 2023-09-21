const { Router } = require('express');
const router = Router();
const {getUser} = require('../controllers/userController');


router.get('/',getUser);

module.exports = router;
