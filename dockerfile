FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME: username 
ENV MONGO_INITDB_ROOT_PASSWORD: password 
WORKDIR /ATC-Database

COPY createTable.js /docker-entrypoint-initdb.d/