import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv  from "dotenv";
import routes from "./routes";

// load the .env file if the server isn’t in production mode
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

// any origin can get a response of the localhost server
app.use(cors());

// parse json for POST requests
app.use(express.json());

// parse urlencoded payloads alowing nested objects for PUT requests
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in ./routes
app.use("/", routes);

const mongoURI = process.env.DB_URI || "mongodb://127.0.0.1/ATCBackend";

mongoose
  // Server connects to MongoDB server 
  .connect(mongoURI, {
    // these flags prevent a deprecation warning
    // Need to up date Mongoose version to > 5.7.1 to remove warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  .then(() => {
    console.log("\nConnected to MongoDB Server");

    // set port, server listens for requests
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Application listening on port ${PORT}.`);
    });
  })

  .catch((err) => {
    console.log(err);
    process.exit(1);
  });