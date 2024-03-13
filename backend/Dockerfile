FROM node:14

WORKDIR /app/backend/

COPY package.json /app/backend/
COPY package-lock.json /app/backend/

RUN npm install

COPY . /app/backend/

EXPOSE 5000

CMD ["npm", "start"]
