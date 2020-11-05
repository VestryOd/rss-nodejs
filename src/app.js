const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const { expresseventLog, errorHandler } = require('./middleware/log');
const jsonWebToken = require('jsonwebtoken');
const authRouter = require('./resources/auth/auth.router');
const { JWT_SECRET_KEY } = require('./common/config');
const { Unauthorized } = require('http-errors');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app
  .use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('<h1 style="color:red;">Service is running!<h1>');
      return;
    }
    next();
  })
  .use(expresseventLog)
  .use('/login', authRouter)
  .use('*', (req, res, next) => {
    if (req.headers.authorization) {
      const authData = req.headers.authorization.split(' ');
      if (
        authData[0] === 'Bearer' &&
        jsonWebToken.verify(authData[1], JWT_SECRET_KEY)
      ) {
        return next();
      }
    }
    next(new Unauthorized());
  })
  .use('/users', userRouter)
  .use('/boards', boardRouter)
  .use(errorHandler);

module.exports = app;
