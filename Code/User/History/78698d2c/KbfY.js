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

    const {username, password} = req.body;


    const user = new User({username, password});

    user.save(err =>{
        if (err) {
            res.status(500).send('Error al registrar al usuario');
        }else{
            res.status(200).send('Usuario Registrado');
        }
    });
});

app.post('/authenticate',(req,res)=>{
  

    

})
app.listen(3000,() =>{
    console.log('server started');

})

module.exports = app;