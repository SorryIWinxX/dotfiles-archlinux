const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI,{})
    .then(db => console.log('database is connected'))
    .cath(err => console.error(err));

    