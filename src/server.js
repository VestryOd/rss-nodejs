const { PORT } = require('./common/config');
const app = require('./app');
const { connectToDB, closeConnection } = require('./db/db');
const {
  onUncaughtException,
  onUnhandledPromiseRejection
} = require('./niddleware/errror-handler');

process
  .on('unhandledRejection', onUnhandledPromiseRejection)
  .on('uncaughtException', onUncaughtException)
  .on('beforeExit', closeConnection);

connectToDB(() =>
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  })
);
