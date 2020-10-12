const dbService = require('../../common/inMemoryDB');

const getAll = async () => dbService.getAllUsers();

const getById = async id => dbService.getUserById(id);

const create = async user => dbService.createUser(user);

const edit = async user => dbService.editUser(user);

const deleteUser = async id => dbService.deleteUser(id);

module.exports = { getAll, getById, create, edit, deleteUser };
