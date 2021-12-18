import express from "express";
import mongoose from "mongoose";
import { json, urlencoded } from "express";
import routes from "./routes";
import cors from "cors";

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.DB_URL || "127.0.0.1";
mongoose
  .connect("mongodb://" + uri + "/ATCBackend")
  .then(() => {
    const app = express();
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(cors());

    app.use("/", routes);

    app.listen(8080, () => {
      console.log("Application listening on 8080");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
