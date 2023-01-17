# Building and Running Back-end
1. Add Docker to Admin Group
    * > NOTE: makes it so that you don't have to type sudo everytime you use `docker`
    * run `sudo groupadd docker`
    * run `sudo usermod -aG docker $USER`
    * run `newgrp docker`

2. Check if Docker Daemon is running
    * run `sudo systemctl is-active docker`
    * > NOTE: If Docker is not running then manually start docker with   `sudo systemctl start docker`

3. Build Docker image and run container to start MongoDB server instance
    ## Quick Way
    * run `cd to ATC-Patient-Management-Backend`
    * `npm run createDB`
        * > **NOTE: Can only be ran once to start server if container not yet created**
        * > NOTE: use `npm run startDB` to start/restart exited/running container
        * > NOTE: use `npm run stopDB` to stop running container
            * > This means that the backend cannot connect to the Mongoose database server!

    ### 👎 Alternative Way 👎
    * run `cd to ATC-Patient-Management-Backend`
    * run `docker build -t atc-db .`
    * run `docker image ls`
        * > NOTE: you should see an image named atc-db created recently
    * run `npm run startDatabase`
    * run `docker container ls`
        * > NOTE: you should see a container named atc-db created)
        * > NOTE: to stop container run: `docker stop [OPTIONS] CONTAINER [CONTAINER...]`

4. Build and run project
	* run `npm install`
	* run `npm run start`
	    * > NOTE: you should see terminal say "Application listening on 8080"
        * > NOTE: 127.0.0.1