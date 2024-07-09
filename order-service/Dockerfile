FROM node:20.12.2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY src ./src

CMD ["node", "src/server.js"]
