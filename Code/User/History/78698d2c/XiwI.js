const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Bcrypt module (encryptacion)

const bcrypt = require('bcrypt');

//Mongoose module

const mongoose = require('mongoose');
const User = require('./public/user');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


//config dataBase MongoDB

const mongo_uri='mongodb+srv://SorryIWin:dinosaurio12@cluster0.n6urydm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongo_uri,(err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Succesfully coneceted to ${mongo_uri}`);
    }
});



app.get('/', (req,res) =>{

});

app.post('/register',(req,res)=>{

    const {username_r, password_r} = req.body;


    const user = new User({username_r, password_r});

    user.save(err =>{
        if (err) {
            res.status(500).send('Error al registrar al usuario');
        }else{
            res.status(200).send('Usuario Registrado');
        }
    });
});

app.post('/authenticate',(req,res)=>{
  
    User.findOne({userame_r}, (err,user) =>{
        if (err) {
            res.status(500).send('Error al autenticar al usuario');
        }else if(!user){
            res.status(500).send('Usuario No existe');
        }else{
                user.isCorrectPassword(password_r, (err,result)=>{
                if (err) {
                res.status(500).send('Error al registrar al Autenticar');
            }else if(result){
                res.status(200).send('Usuario Registrado');
            }else{
                
                res.status(200).send('Usuario Incorrecto');
            }
            });
        }
    })
    

})
app.listen(3000,() =>{
    console.log('server started');

})

module.exports = app;