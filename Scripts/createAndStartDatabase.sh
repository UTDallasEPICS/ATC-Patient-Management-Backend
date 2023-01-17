# Script to build MongoDB image and then run the container to start MongoDB server instance
# Can only be ran once to start server, once container already created - use startDatabase.sh

image_name="atc-db"
container_name="ATC-DB"

# Build MongoDB image if image does not exist
if [ "$(docker images $image_name --quiet 2> /dev/null)" == "" ]; then
    echo "MongoDB image '$image_name' does not exist, building image now..."
    docker build --tag $image_name .
    echo -e "\n'$image_name' image built, now starting container / MongoDB Server Instance from image..."
fi


# If container doesn't exist yet
if [ "$( docker container inspect -f '{{.State.Running}}' $container_name 2> /dev/null)" == "" ]; then
    echo -e "Creating and starting container '$container_name' / MongoDB Server Instance from image '$image_name'"
    
    # Create containers and start MongoDB server instance from image atc-db
        # names container ATC-DB
        # stores/writes data in Docker containers to host:/data/db
        # connects to MongoDB instance on mongodb://localhost:27017
        # Run container in background and print container ID
        # --rm flags wont work in conjunction with -d flag (removes container after it exits)
    docker run --name $container_name --volume $container_name:/data/db --publish 27017:27017 --detach $image_name 2> /dev/null

# If container already exists
else
    echo -e "ERROR: Container '$container_name' already exists. \n\tPlease Use startDatabase.sh"
fi


