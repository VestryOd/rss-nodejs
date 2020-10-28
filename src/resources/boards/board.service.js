const boardsRepo = require('./board.db.repository');

const getAll = async () => await boardsRepo.getAll();

const getById = async boardId => await boardsRepo.getById(boardId);

const create = async (title, columns) => await boardsRepo.add(title, columns);

const edit = async (boardId, title, columns) => {
  return await boardsRepo.update(boardId, title, columns);
};

const deleteById = async (boardId, title, columns) =>
  await boardsRepo.del(boardId, title, columns);

module.exports = { getAll, getById, create, edit, deleteById };
