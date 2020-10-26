
var express = require('express'); 
var app = express(); 
require('mongoose').connect('mongodb://127.0.0.1/ATCBackend'); 

app.use(require('body-parser').json()); 

app.use('/',require('./routes/routes.js')(express.Router())); 

app.listen(8080, ()=>{
    console.log("Application listening on 8080");
});