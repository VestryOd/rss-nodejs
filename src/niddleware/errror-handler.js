const winston = require('winston');
const expressWinston = require('express-winston');
const { InternalServerError } = require('http-errors');
const { CustomError } = require('../common/utills');

const loggerForEvents = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'silly',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new winston.transports.File({
      filename: 'all-in-one.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  ]
});

const eventLogger = expressWinston.logger({
  winstonInstance: loggerForEvents,
  statusLevels: true,
  meta: false,
  msg:
    'HTTP ({{res.statusCode}}) - {{req.method}}: {{req.path}}, params: {{JSON.stringify(req.query)}}, body: {{JSON.stringify(req.body)}}'
});

const errorLogger = expressWinston.errorLogger({
  winstonInstance: loggerForEvents,
  meta: false,
  statusLevels: true,
  dumpExceptions: true,
  showStack: true,
  msg:
    'HTTP ({{err.statusCode}}) - {{req.method}}: {{req.path}}, params: {{JSON.stringify(req.query)}}, body: {{JSON.stringify(req.body)}}, message: {{err.message}}'
});

const errorHadler = (err, req, res, next) => {
  if (err && err instanceof CustomError) {
    res.status(err.status).json(err.message);
    return;
  }
  const error = new InternalServerError();
  errorLogger(error, req, res, next);
  res.status(error.status).json(error.message);
};

const onUncaughtException = err => {
  loggerForEvents.log({
    level: 'error',
    message: `Unhandled exception: ${err.message}, stack: ${err.stack}`
  });
};

const onUnhandledPromiseRejection = err => {
  loggerForEvents.log({
    level: 'error',
    message: `Unhandled promise rejection: ${err.message}, stack: ${err.stack}`
  });
};

module.exports = {
  eventLogger,
  errorHadler,
  onUncaughtException,
  onUnhandledPromiseRejection
};
