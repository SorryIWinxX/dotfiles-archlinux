const moongose = require('mongoose');
const { Schema } = moongose;
const bcrypt = require('bcrypt-nodejs');

userSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

userSchema.methods.encryptPassword = (password)=>{
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};


userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = moongose.model('users',userSchema);