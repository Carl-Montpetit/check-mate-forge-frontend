# use an official Node.js runtime as a parent image
FROM node:21-bookworm-slim

# set the working directory in the container
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies based on the lock file
RUN npm i

# copy the rest of the application code to the working directory
COPY . .

# expose the port that the app will run on
EXPOSE 8080

# start the application
CMD ["npm", "run", "dev"]
