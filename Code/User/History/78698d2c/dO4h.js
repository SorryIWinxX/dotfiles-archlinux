const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Bcrypt module (encryptacion)

const bcrypt = require('bcrypt');

//Mongoose module

const mongoose = require('mongoose');



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

app.listen(3000,() =>{
    console.log('server started');

})

module.exports = app;