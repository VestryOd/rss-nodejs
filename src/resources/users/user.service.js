const usersRepo = require('./user.db.repository');

const getAll = async () => await usersRepo.getAll();

const getById = async id => await usersRepo.getById(id);

const create = async (name, login, password) => {
  return await usersRepo.add(name, login, password);
};

const edit = async (id, name, login, password) => {
  return await usersRepo.update(id, name, login, password);
};

const deleteById = async id => await usersRepo.del(id);

module.exports = { getAll, getById, create, edit, deleteById };
