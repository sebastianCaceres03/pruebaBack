const { Router } = require('express');
const router = Router();
const {createTask,getTask,updateTask,deleteTask} = require('../controllers/taskController');
const {validateFieldsCraete,validateFieldsUpdate} = require('../accions/validationsTask')


router.get('/',getTask);
router.post('/',validateFieldsCraete,createTask);
router.put('/',validateFieldsUpdate,updateTask)
router.delete('/:id',deleteTask)

module.exports = router;
