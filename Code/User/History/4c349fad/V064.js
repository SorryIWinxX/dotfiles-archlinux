const express =require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/', (req,res) =>{
    res.send("Welcolme on my API")
});

//mongodb conection

mongoose
.connect('mongodb+srv://SorryIWin:dinosaurio12@cluster0.n6urydm.mongodb.net/hypermotorsDB?retryWrites=true&w=majority')
.then(()=>console.log("conected to MONGO ATLAS"))
.catch((error)=> console.log(error));


app.listen(port, () => console.log('Server listening on port',port));
