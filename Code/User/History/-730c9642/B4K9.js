const express = require('express');

const engine =require('ejs-mate');
const app = express();


//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);



//starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
}) 