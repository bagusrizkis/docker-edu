# Base image
FROM node:14.17.6

# working directory
WORKDIR /usr/demoapp/server

# Setup
# . adalah workdirectory
# COPY package*.json .
COPY . .

RUN npm install

# copy app
COPY . .

# beri akses ke port
EXPOSE 3000

# Jalanin command di container
CMD [ "npm", "run", "start" ]