# base image
FROM node:9.6.1

# set working directory
RUN mkdir /src
WORKDIR /src

# install and cache app dependencies
COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json

RUN npm install --silent

COPY ./server.js /src
COPY ./ui-react/build /src/ui-react/build

EXPOSE 3001
EXPOSE 3000

# start app
CMD ["npm", "start"]