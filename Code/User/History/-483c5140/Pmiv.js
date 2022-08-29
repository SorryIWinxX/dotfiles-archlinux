const moongose = require('mongoose');
const { Schema } = moongose;

new userSchema = new Schema({
    email:String,
    password:String
});

module.exports = moongose.model('users',userSchema)