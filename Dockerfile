FROM node:15.4-alpine3.10
MAINTAINER Max Rodrigo "contact@maxrodrigo.com"
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
ENV REACT_APP_SOCKET_PORT 80
RUN npm run client:prod

ENV PORT 8080
EXPOSE 8080
CMD ["npm", "run", "server:prod"]
