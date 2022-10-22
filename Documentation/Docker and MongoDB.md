# Docker - MongoDB Server
* Will use a docker MongoDB image and run that image as a container to start our MongoDB server for ATC-Backend
    * backend will then connect to this MongoDB server instance via localhost:port

* **SCRIPTS**
    * `npm run createDB`
        * build docker image using a dockerfile and create + run container to start a MongoDB server instance
        * > **NOTE: Can only be ran once to start server if container not yet created**
    * `npm run startDB`
        * Start/restart exited/running container
    * `npm run stopDB`
        * Stop running container
        * > This means that the backend cannot connect to the Mongoose database server!

    * 👎 ALTERNATIVE 👎
        * pull MongoDB image
            * `docker pull mongo`
        * Start a MongoDB server Instance
            * `docker run --name MONGODB_SERVER_NAME -d mongo:latest`

* **OTHER**
    * view images
        * `docker image ls -a`
    * view containers
        * `docker container ls -a`
    * delete images
        * `docker image rm IMAGE_NAME`
    * delete containers
        * `docker container rm CONTAINER_NAME`
<br/><br/>

* **REFERENCES**
    * https://www.tutorialspoint.com/docker/docker_file.htm
    * https://www.mongodb.com/compatibility/docker
    * https://hub.docker.com/_/mongo
        * [run Reference](https://docs.docker.com/engine/reference/commandline/run/)
    * [How to automatically delete a Docker container after running it](https://www.powercms.in/article/how-automatically-delete-docker-container-after-running-it)
<br/><br/>

* [**dockerfile**](https://docs.docker.com/engine/reference/builder/)
    * Docker can build images automatically by reading the instructions from a Dockerfile
    *  text document that contains all the commands a user could call on the command line to assemble an image
    * `docker build .`
    * `FROM` [ref](https://docs.docker.com/engine/reference/builder/#from)
    * `ENV` [ref](https://docs.docker.com/engine/reference/builder/#environment-replacement)
    * `WORKDIR` [ref](https://docs.docker.com/engine/reference/builder/#workdir)

* **.dockerignore**
    * Ignores files to speed up docker build process
    * otherwise the "Sending build context to Docker daemon" takes forever
    * [Using dockerignore](https://www.tutorialspoint.com/using-dockerignore-file)
    * [Docker Build Context (Why You Should Use Dockerignore)](https://www.howtogeek.com/devops/understanding-the-docker-build-context-why-you-should-use-dockerignore/)
<br/><br/>

# Run Command Explained
* `docker run --name ATC-DB -v ATC-DB:/data/db -p 27017:27017 -d --rm atc-db`
    * creates container from image then starts container
    * `--name` - Assign a name to the container
    * `--volume` , `-v` - Bind mount a volume
        * [volumes](https://docs.docker.com/storage/volumes/)
        * mechanism for persisting data generated by and used by Docker containers
        * https://docs.docker.com/storage/volumes/#choose-the--v-or---mount-flag
            * first field is the name of the volume : path where the file or directory are mounted in the container
    * `--publish` , `-p`
        * [Publish a container's port(s) to the host](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose)
        * binds port 27017 of the container to TCP port 27017
            * The [default port for mongod](https://www.mongodb.com/docs/manual/reference/default-mongodb-port/) instances
        * ports not bound to the host are accessible from the outside
    * `--detach` , `-d`
        * Run container in background and print container ID
    * `--rm`
        * Automatically remove the container when it exits
    * atc-db
        * name of image