const moongose = require('mongoose');
const mongo_uri='mongodb+srv://SorryIWin:dinosaurio12@cluster0.n6urydm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongo_uri,(err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Succesfully coneceted to ${mongo_uri}`);
    }
});