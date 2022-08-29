const express =require('express');

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/', (req,res) =>{
    res.send("Welcolme on my API")
})


app.listen(port, () => console.log('Server listening on port',port));
