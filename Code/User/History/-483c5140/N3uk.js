const moongose = require('mongoose');
const { Schema } = moongose;

new userSchema = new Schema({
    email:String,
    password:String
});

moongose.model('users',userSchema)