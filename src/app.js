const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const {
  eventLogger,
  errorHadler,
  onUncaughtException,
  onUnhandledPromiseRejection
} = require('./niddleware/errror-handler');
// const { exit } = process;

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app
  .use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  })
  .use(eventLogger)
  .use('/users', userRouter)
  .use('/boards', boardRouter)
  .use(errorHadler);

process.on('uncaughtException', error => {
  onUncaughtException(error);
});

process.on('unhandledRejection', error => {
  onUnhandledPromiseRejection(error);
});

// throw Error('oops');

// Promise.reject(new Error('Oops!'));

module.exports = app;
