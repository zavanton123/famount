FROM node:14.14.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install
COPY ./ ./
ENV NODE_PATH=./build
RUN npm run build
EXPOSE 5000

CMD ["npm", "run", "prod"]
