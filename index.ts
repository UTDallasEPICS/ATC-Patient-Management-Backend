import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from "./routes/index.js";

mongoose.connect('mongodb://127.0.0.1/ATCBackend'); 

express()
.use(bodyparser.json())
.use('/', routes) 
.listen(8080, ()=>{
    console.log("Application listening on 8080");
});