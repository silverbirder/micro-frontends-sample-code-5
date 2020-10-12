FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

ENV PORT=8080 \
    NODE_ENV=production

CMD [ "npm","run", "start"]
