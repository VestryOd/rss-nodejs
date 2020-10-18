const usersRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = async () => await usersRepo.getAll();

const getById = async id => await usersRepo.getById(id);

const create = async user => await usersRepo.create(user);

const edit = async user => await usersRepo.edit(user);

const deleteById = async id => {
  await taskRepo.updateTask(id);
  return await usersRepo.deleteById(id);
};

module.exports = { getAll, getById, create, edit, deleteById };
