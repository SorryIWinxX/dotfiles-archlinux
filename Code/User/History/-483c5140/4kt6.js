const moongose = require('mongoose');
const { Schema } = moongose;
const bcrypt = require('bcrypt-nodejs');

new userSchema = new Schema({
    email:String,
    password:String
});

module.exports = moongose.model('users',userSchema)