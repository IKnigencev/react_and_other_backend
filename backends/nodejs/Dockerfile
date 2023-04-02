FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm config set timeout 6000000
RUN npm install
COPY . ./

CMD npm run dev
