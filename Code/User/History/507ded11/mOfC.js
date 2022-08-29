
const express = require('express');
const passport = require('passport');
const router = express.Router()

//ruta para mostrar el home

router.get('/', (req,res,next)=>{
    res.render('index');
});

//ruta para mostrar el sing up

router.get('/signup', (req,res,next)=>{
    res.render('signup');
});

//ruta para recibir credeciales de singup

router.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/',
    failureRedirect:'/signup',
    passReqToCallback:true
}));

// ruta para mostrar el login 

router.get('/signin', (req,res,next)=>{
    
})

//ruta para recibir credenciales del login

router.post('/signin', (req,res,next)=>{
    
})

router.get('/profile',(req,res,next)=>{
    res.render('profile');
})








module.exports = router;