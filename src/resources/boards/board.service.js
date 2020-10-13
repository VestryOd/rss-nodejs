const boardsRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();

const create = board => boardsRepo.create(board);

const getById = id => boardsRepo.getById(id);

const edit = board => boardsRepo.edit(board);

const deleteById = boardId => {
  const cleared = taskRepo.clearTasks(boardId);
  if (!cleared.length) {
    return boardsRepo.deleteById(boardId);
  }
};

module.exports = { getAll, getById, create, edit, deleteById };
