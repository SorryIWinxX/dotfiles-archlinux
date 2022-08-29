const exprees = require('exprees');
const router = exprees.Router(); 

router.post('/singup', (req,resp) =>{
    resp.send('send');
})

module.exports = router;