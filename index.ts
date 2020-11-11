
var express = require('express'); 
var app = express(); 
require('mongoose').connect('mongodb://127.0.0.1/ATCBackend'); 

app.use(require('body-parser').json()); 
var foo = express.Router();
app.use('/',require('./routes/routes.ts')(express.Router())); 

app.listen(8080, ()=>{
    console.log("Application listening on 8080");
});