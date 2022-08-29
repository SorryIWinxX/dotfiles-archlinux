const passport = require('passport');
const LocalStrategy = require('passport-local');

const User =require('../models/user')

passport.serializeUser((user,done)=>{
    done(null, user.id);
})

passport.use('local-signup', new LocalStrategy({
    usernameFeld:'email',
    passwordField:'password',
    passReqToCallback:true
},async (req,email,password,done)=>{
    const user = new User();
    user.email = email;
    user.password = password;
    await user.save(); 
    done(null,user);      
}));