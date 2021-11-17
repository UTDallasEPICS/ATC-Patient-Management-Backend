import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import routes from "./routes";
import cors from "cors";

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.DB_URL || "127.0.0.1";
mongoose
    .connect("mongodb://" + uri + "/ATCBackend")
    .then(() => {
        express()
            .use(json())
            .use(cors())
            //?.use(bodyParser.urlencoded({ extended: true }))
            .use("/", routes)
            .listen(8080, () => {
                console.log("Application listening on 8080");
            });
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
