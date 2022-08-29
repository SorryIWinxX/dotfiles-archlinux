const moongose = require('mongoose');
const {mongodb }=require('./keys')
moongose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db=>console.log('Database is connect'))
    .catch(err => console.error(err));