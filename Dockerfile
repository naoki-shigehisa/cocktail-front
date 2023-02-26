FROM node:lts-buster-slim

WORKDIR /app/src

COPY ./front/src/package*.json /app/src/
RUN npm install
