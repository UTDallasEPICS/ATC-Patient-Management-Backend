import express from "express";
import mongoose from "mongoose";
import {json} from "body-parser";
import routes from "./routes";

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.DB_URL || '127.0.0.1';
mongoose.connect('mongodb://' + uri + '/ATCBackend').catch((err) => { console.log(err); process.exit(1); })

express()
.use(json())
.use('/', routes)
.listen(8080, ()=>{
    console.log("Application listening on 8080");
});
