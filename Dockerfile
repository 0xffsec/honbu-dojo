FROM node:15.4-alpine3.10
MAINTAINER Max Rodrigo "contact@maxrodrigo.com"
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./

EXPOSE 8080
CMD ["npm", "start"]
