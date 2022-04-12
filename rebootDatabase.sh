#Reboots Database by removing the container and running it again
docker stop ATC-DB
docker run --name ATC-DB -v ATC-DB:/data/db -p 27017:27017 -d --rm atc-db