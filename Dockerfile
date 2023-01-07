FROM node:latest

WORKDIR /app

COPY . .

RUN npm install 

CMD ["node", "."]

EXPOSE 3000