const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = user => usersRepo.create(user);

const edit = user => usersRepo.edit(user);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getById, create, edit, deleteUser };
