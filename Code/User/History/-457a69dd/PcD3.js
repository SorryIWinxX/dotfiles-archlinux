const moongose = require('mongoose');
const {mongodb} = require('./keys');

moongose.connect(mongodb.URI,{})
    .then(db => console.log('database is connected'))
    .catch(err => console.error(err));

