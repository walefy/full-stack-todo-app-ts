FROM node:18.18.0-alpine3.18

EXPOSE 3001

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
