# Node.js Express Server
## [Express Routes and Controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/*Express_Nodejs/routes)
![](https://i.imgur.com/0brzKNe.png)
![](https://i.imgur.com/VZdyPL5.png)
* [Model View Controller (MVC) Design](https://stackoverflow.com/questions/11066958/in-the-model-view-controller-principle-what-is-the-frontend-and-what-is-the-bac)
* [Controller vs Middleware](https://stackoverflow.com/questions/57274465/whats-the-difference-between-a-controller-and-a-middleware)
* [Express Routing Guide](https://expressjs.com/en/guide/routing.html)

* Routing refers to how an application’s endpoints (URIs) respond to client requests
    * forwards the supported requests to appropriate controller functions
* Middleware is code that examines an incomming request and prepares it for further processing
* Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser
* Views used by the controllers to render the data.
* [URI vs URL](https://danielmiessler.com/study/difference-between-uri-url/)
* [Endpoints](https://developer.wordpress.org/rest-api/extending-the-rest-api/routes-and-endpoints/#overview)
    * Endpoints are functions available through the API
    * the destination that a route needs to map to
        * like retrieving the API index, updating a post, or deleting a comment
        * GET, POST, DELETE

## Express Server General Properties
* Has Rest APIs
    * Login and Registration
    * Express routes
* supports JWT (JSONWebToken)
    * access is verified by JWT Token in HttpOnly Cookies
    * TODO auth0
* works with MongoDB database 
    * uses Mongoose ODM (Object Data Modeling) library for  MongoDB and Node. js
* Role based Authorization
    * employee users can signup, signin
    * public page to sign in

# server.js
* [import vs require](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/#:~:text=Require%20is%20Non%2Dlexical%2C%20it,the%20beginning%20of%20the%20file.)
* [Cross-origin Requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    * [CORS in 100 Seconds](https://www.youtube.com/watch?v=4KHiSt0oLJ0)
    * [CORS in Express](https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/)
    * mechanism to allow website on 1 URL to request data from another different URL
    * Browser implements a Same-Origin Policy for security
        * allows a website to freely request data from its own URL but blocks anything from an external URL unless certain conditions are met
            * Requests has an Origin header to request message
                * browser allows request to server on same origin
                * if request goes to different URL - is a cross-origin request
                    * server will add Access-Control-Allow-Origin header to responce 
                        * its value needs to match the origin header
        * Express CORS middleware to respond with the proper CORS header on every responce
* [express.json and express.urlencoded](https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded)
    *  DO NOT NEED `express.json()` and `express.urlencoded()` for GET Requests or DELETE Requests
    * For POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
    * `bodyParser.json`
        * returns middleware that only parses incomming JSON requests and puts the parsed data in req.body
        * recognize the incoming Request Object as a JSON Object
        * POST requests
    * `bodyParser.urlencoded({extended: ...})`
        * parses incoming requests with urlencoded payloads
        * recognize the incoming Request Object as strings or arrays (or nested objects with true)
        * tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm (i.e. true) for deep parsing that can deal with nested objects
        * PUT requests
* Environment Variables
    * Variables with values
    * for setting configuration options as well as storing important values securely
    * [Dotenv](https://www.npmjs.com/package/dotenv)
        * npm package to allow developers to create a .env file that has custom environment files that are added into the process.env object
    * [Why i should not use dotenv in production mode](https://stackoverflow.com/questions/67604414/why-i-should-not-use-dotenv-in-production-mode)
        * [DEV vs PROD](https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/)
        * [How to use Environment Variables in NodeJs with Express and Dotenv](https://www.mickpatterson.com.au/blog/how-to-use-environment-variables-in-nodejs-with-express-and-dotenv)