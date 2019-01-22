const mongoose = require('mongoose');

// connect to mongoDB
mongoose.connect('mongodb:http://careerdevs18-liftedresearch.c9users.io:8080');

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});

