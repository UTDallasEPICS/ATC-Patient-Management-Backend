# Sample docker build image config

# Use latest MongoDB version 
#FROM mongo:latest

# Environmental variables defined
#ENV MONGO_INITDB_ROOT_USERNAME: username 
#ENV MONGO_INITDB_ROOT_PASSWORD: password

# Sets working directory for any RUN, CMD,... instructions that follow it in the Dockerfile
#WORKDIR /
FROM postgres

ENV POSTGRES_PASSWORD atc
ENV POSTGRES_DB atc
ENV POSTGRES_USER atc
EXPOSE 5432