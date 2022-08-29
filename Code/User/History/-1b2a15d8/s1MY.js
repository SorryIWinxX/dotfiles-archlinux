const exprees = require('exprees');
const { request, response } = require('express');
const router = exprees.Router(); 
const singUpTemplateCopy = require('../models/SIngUpModels')

router.post('/singup', (req,resp) =>{
    const singedUpUser = new singUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password,
        darkmode:request.body.darkmode,
        carColor:request.body.password
    })
    singedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports = router;