const exprees = require('exprees');
const router = exprees.Router(); 
const singUpTemplateCopy = require('./models/SIngUpModels')

router.post('/singup', (req,resp) =>{
    resp.send('send');
})

module.exports = router;