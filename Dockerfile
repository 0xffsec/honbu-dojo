FROM node:13.12.0-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./

EXPOSE 8080
CMD ["npm", "start"]
