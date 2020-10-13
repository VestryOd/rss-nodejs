const usersRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = user => usersRepo.create(user);

const edit = user => usersRepo.edit(user);

const deleteById = id => {
  taskRepo.updateTask(id);
  return usersRepo.deleteById(id);
};

module.exports = { getAll, getById, create, edit, deleteById };
