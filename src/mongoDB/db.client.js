const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');

const connectToDB = callback => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    }
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => callback());
};

const disconectFromDB = () => {
  mongoose.disconnect();
};

module.exports = { connectToDB, disconectFromDB };
