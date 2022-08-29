const exprees = require('exprees');
const router = exprees.Router(); 
const singUpTemplateCopy = require('../models/SIngUpModels')

router.post('/singup', (req,resp) =>{
    const singedUpUser = new singUpTemplateCopy({
        
    })
})

module.exports = router;