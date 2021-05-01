#Running from Node.js
FROM node
#Creating a root folder for Node.js
RUN  mkdir -p /usr/src/app
#Assigning /usr/src/app as a Working Directory
WORKDIR /usr/src/app
COPY . .
#Installing the dependency
RUN  npm install && npm cache clean --force
#Exposing the App to the port 3000
EXPOSE 3000
#Starting the  Application with 'npm start;
CMD [ "npm","start" ]
