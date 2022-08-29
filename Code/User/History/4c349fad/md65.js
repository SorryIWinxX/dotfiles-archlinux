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

mongoose.connection(process.env.MONGODB_URI)

app.listen(port, () => console.log('Server listening on port',port));
