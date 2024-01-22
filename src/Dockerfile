
FROM node:14

WORKDIR /server


COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 3000


ENV DB_HOST=localhost
ENV DB_USER=ketan
ENV DB_PASSWORD=ketan
ENV DB_NAME=grocery_db

CMD ["npm", "start"]
