const dbService = require('../../common/local-db/task-db');

const getAllByBoardId = async boardId => dbService.getAllByBoardId(boardId);

const getById = async id => dbService.getById(id);

const createTask = async task => dbService.createTask(task);

const editTask = async task => dbService.editTask(task);

const deleteById = async id => dbService.deleteById(id);

const clearTasks = async boardId => dbService.deleteTaskByBoard(boardId);

const updateTask = async userId => dbService.updateTaskWhenUserDeleted(userId);

module.exports = {
  getAllByBoardId,
  createTask,
  getById,
  editTask,
  deleteById,
  clearTasks,
  updateTask
};
