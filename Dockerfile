# Using the latest LTS version of
# 12 of node available from the Docker Hub
FROM node:12

# Create a directory (will be working directory for our application)
# to hold the application code inside the image
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND 
# package-lock.json are copied where available
COPY package*.json ./

RUN npm install

# If building the code for production
# RUN npm ci --only=production

# To bundle app's source code inside a Docker image 
COPY . .

# App binds to port 8080
EXPOSE 8080

# Run your app using CMD which defines runtime
CMD ["node", "index.js"]

# Instruction to build Docker image
# Go to the directory that has Dockerfile
# Run the following command to build the Docker image
# -t flag lets you tag your image 
# `docker build -t <yourusername>/db-challengeapi .`

# Run the image
# -d runs the container in detached mode, leaving container 
# running in the background
# -p flag redirects a public port to a private port 
# inside the container
# `docker run -p 49160:8080 -d <your username>/db-challengeapi`

# Print the output of the app running `docker ps`

# if needed to go inside container run
# `docker exec -it <container id> /bin/bash`

# Test
# `curl -i localhost:49160/analyze` 