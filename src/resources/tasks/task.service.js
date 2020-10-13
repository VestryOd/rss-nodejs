const tasksRepo = require('./task.memory.repository');

const getAllByBoardId = boardId => tasksRepo.getAllByBoardId(boardId);

const getById = id => tasksRepo.getById(id);

const createTask = task => tasksRepo.createTask(task);

const editTask = task => tasksRepo.editTask(task);

const deleteById = id => tasksRepo.deleteById(id);

const updateTasks = userId => tasksRepo.updateTaskWhenUserDeleted(userId);

module.exports = {
  getAllByBoardId,
  createTask,
  getById,
  editTask,
  deleteById,
  updateTasks
};
