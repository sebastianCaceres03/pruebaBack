const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer')
const bodyParser = require('body-parser')
const cors = require('cors')

//setings
app.set('port', process.env.PORT || 4000);
require('./config/database');


app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(multer().any())

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var rurasMiddelware = require('./middleware/loginMiddleware');


//Login
app.use('/api/login', require('./app/Login/routes/login'));
//register
app.use('/api/register', require('./app/register/routes/register'));
//user
app.use('/api/user', rurasMiddelware, require('./app/users/routes/user'));
//task
app.use('/api/task', rurasMiddelware, require('./app/task/routes/task'));

//routes docente
//app.use('/api/docente', rurasMiddelware, require('./app/Docente/routes/docente_route'));



app.listen(app.get('port'), () => {
    console.log('app en el puerto 4000');
})

