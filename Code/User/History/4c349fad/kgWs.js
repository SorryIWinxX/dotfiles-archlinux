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
.connect(process.env.MONGODB_URI)
.then(()=>console.log("conected to MONGO ATLAS"))
.catch((error)=> console.log(error));


app.listen(port, () => console.log('Server listening on port',port));
