const express = require('express');
const path = require('path')
const engine =require('ejs-mate');
const app = express();
const morgan = require('morgan');
const passport = require('passport')
const session = require('express-session')
//initializations


require('./passport/local-auth');
require('./database');
//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:'myscreetsession',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use('/' ,require('./routes/index'))


//starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
}) 