import express from "express";
import mongoose from "mongoose";
import {json} from "body-parser";
import routes from "./routes";



mongoose.connect('mongodb://127.0.0.1/ATCBackend'); 

express()
.use(json())
.use('/', routes) 
.listen(8080, ()=>{
    console.log("Application listening on 8080");
});

