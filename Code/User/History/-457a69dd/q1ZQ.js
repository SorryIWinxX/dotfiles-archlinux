const moongose = require('mongoose');
const {mongodb }=require('./keys')
moongose.connect(mongodb.URI, {})
    .then(db=>console.log('Database is connect'))
    .catch(err => console.error(err));