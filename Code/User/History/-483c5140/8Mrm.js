const moongose = require('mongoose');
const { Schema } = moongose;
const bcrypt = require('bcrypt-nodejs');

new userSchema = new Schema({
    email:String,
    password:String
});

userSchema.methods.encryptPassword = (password)=>{
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = moongose.model('users',userSchema);