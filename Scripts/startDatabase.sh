# restart or start database container
container_name="ATC-DB"
if [ "$( docker container inspect -f '{{.State.Status}}' $container_name 2> /dev/null )" == "running" ]; then
    echo "RESTARTING DATABASE"
    echo -n "Restarted "
    docker restart ATC-DB

elif [ "$( docker container inspect -f '{{.State.Status}}' $container_name 2> /dev/null )" == "exited" ]; then
    echo "STARTING DATABASE"
    echo -n "Started "
    docker start ATC-DB
else
    echo "ERROR: Container $container_name does not exist!"
fi
