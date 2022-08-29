const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use('local-signup', new LocalStrategy({
    usernameFeld:'email',
    passwordField:'password',
    passReqToCallback:true
},(req,email,password,done)=>{
    
}));