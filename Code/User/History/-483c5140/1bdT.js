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


userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = moongose.model('users',userSchema);