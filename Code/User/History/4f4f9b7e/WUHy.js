const mongoose = require('mongoose');

const singUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    darkmode:{
        type:Boolean,
        require:true
    },
    carColor:{

        type:String,
        require:true
    }
})

module.exports = mongoose.model('mytable',singUpTemplate)