const mongoose = require('mongoose');

const { MONGO_CONNECTION_STRING } = require('../common/config');
// const User = require('../resources/users/user.model');

// const userData = [
//   {
//     name: 'John',
//     login: 'john',
//     password: '123456'
//   },
//   {
//     name: 'Smith',
//     login: 'smith',
//     password: '123456'
//   },
//   {
//     name: 'Jane',
//     login: 'jane',
//     password: '123456'
//   },
//   {
//     name: 'Rene',
//     login: 'rene',
//     password: '123456'
//   },
//   {
//     name: 'Bill',
//     login: 'bill',
//     password: '123456'
//   },
//   {
//     name: 'Will',
//     login: 'will',
//     password: '123456'
//   },
//   {
//     name: 'Mick',
//     login: 'mick',
//     password: '123456'
//   },
//   {
//     name: 'Michael',
//     login: 'newUser',
//     password: '123456'
//   }
// ];

// const users = userData.map(user => new User({ ...user }));

const connectToDB = cb => {
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
  db.once('open', () => {
    console.log('we are connected');
    // users.forEach(user => user.save());
    cb();
  });
};

const closeConnection = () => {
  mongoose.disconnect();
};

module.exports = { connectToDB, closeConnection };
