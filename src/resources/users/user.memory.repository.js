const dbService = require('../../common/local-db/user-db');

const getAll = async () => dbService.getAllUsers();

const getById = async id => dbService.getUserById(id);

const create = async user => dbService.createUser(user);

const edit = async user => dbService.editUser(user);

const deleteById = async id => dbService.deleteById(id);

module.exports = { getAll, getById, create, edit, deleteById };
