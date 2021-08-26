ATC Patient Management Backend
========================

<h3 align="left">Languages and Tools:</h3>

<p align="left"> <a href="https://www.docker.com/" target="_blank"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>
 </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
</a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
 </a> <a href="https://www.mongodb.com/" target="_blank">  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> 
 <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
 </a> </p>

# Table of Contents

- [Installation](https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend#installation)
- [Usage](https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend#usage)

# Installation

To build this project, you will need to install [Node.js](https://nodejs.org/en/)

This will allow you to install all the packages from the [package.json](https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend/blob/main/package.json) file with one of the following commands:
``````
npm i 
``````
``````
npm install
``````

We used [Docker](https://www.docker.com/) to streamline the server connection process, and recommend that you do so too. This will allow you to set up the mongo container. 

If you are using Windows, we also recommend that you look through the Windows setup under [Docker Docs](https://docs.docker.com/get-docker/) to help with setting up the program as Windows has a few external requirements. With Windows, you'll have to choose a backend format that can come in the form of: A WSL 2 backend, a Hyper-V backend, or a VM in a different OS, such as Linux, that you'll use to run Docker instead.

Once your Docker is set up and you are connected to the Mongoose server, use the following command to run it:
```
npm run start
```

The server connection logic can be found under [index.ts](https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend/blob/main/index.ts) 
- If the '127.0.0.1'  uri fails to connect for you, consider creating your own [.env](https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend/blob/main/.env.example) file *(Example provided with the link)*

# Usage  

We used either [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test requests, the tool you decide to use is up to you

Requests use the JSON format, here is an example Get request under **localhost:8080/signin**:
```
{
    "email": "student@utdallas.edu",
    "name": "student",
    "password_confirmation": "123",
    "password": "123"
}
```

[MongoDB Compass](https://www.mongodb.com/products/compass) can be used to view the information stored within the MongoDB database that this project uses
- You will need the connection string used by **mongoose.connect()** under [index.ts](https://github.com/UTDallasEPICS/ATC-Patient-Management-Backend/blob/main/index.ts) to use this
