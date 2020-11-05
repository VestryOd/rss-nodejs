const bcrypt = require('bcrypt');
const { User } = require('./user.model');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = async () => {
  return await User.find({});
};

const addUser = async (name, login, password) => {
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({ name, login, password: hash });
  await newUser.save();
  return newUser;
};

const getUserById = async userId => {
  return await User.findById(userId);
};

const updateUser = async (userId, name, login, password) => {
  const foundUser = await User.findById(userId);
  const hash = await bcrypt.hash(password, 10);
  if (foundUser) {
    foundUser.name = name;
    foundUser.login = login;
    foundUser.password = hash;
    await foundUser.save();
    return foundUser;
  }
  return null;
};

const deleteUser = async userId => {
  const foundUser = await User.findById(userId);
  if (foundUser) {
    await foundUser.remove();
    await tasksRepo.resetUser(userId);
    return foundUser;
  }
  return false;
};

const getUserByLogin = async login => {
  return await User.findOne({ login });
};

module.exports = {
  getAll,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByLogin
};
