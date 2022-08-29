const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const salRotunds = 10;

const UserSchema = new mongoose.Schema({
fullName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})


UserSchema.pre('save', (next) =>{
    if (this.isNew || this.isModified('password')) {
        const document = this;

        bcrypt.hash(document.password, salRotunds,(err,hashedPassword) =>{
            if (err) {
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.method.isCorrectPassword = (password, callback)=>{
    bcrypt.compare(password, this.password, (err,same)=>{
        if (err) {
            callback(err);
        }else{
            callback(err,same);
        }
    })
}

module.exports = mongoose.model('User',UserSchema);