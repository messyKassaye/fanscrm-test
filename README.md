## FansCRM Full-stack test

This Project is created with docker. It contains mysql, backend and frontend service

### Backend

The backend project is created with NestJS and Sequelize ORM with mysql2 driver

### Frontend

The frontend project is created with Vite which is a local development server for react and other frameworks

### How to run the whole test Project

To run the whole test project you need to have docker desktop installed in your device

#### Steps

```bat
docker-compose build
```

then

```bat
docker-compose up
```

## Electron desktop application test
I also added electron desktop with react. I can't add electron to docker service, so I use manual running to see it

#### Run it like below
```bat
npm install && cd app && npm install && npm run electron:serve
```

