const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv')
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

import routes from "./routes";

const app = express();

// load the .env file if the server isn’t in production mode
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8080',
  clientID: 'UAdvr0ooyHVrALfpjLSHJhzelNDPXvjR',
  issuerBaseURL: 'https://dev-w205xag6.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

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