const tasksRepo = require('./task.db.repository');

const getAllByBoardId = async boardId =>
  await tasksRepo.getAllByBoardId(boardId);

const getById = async task => await tasksRepo.getById(task);

const createTask = async task => {
  return await tasksRepo.add(task);
};

const editTask = async (boardId, taskId, newValues) => {
  return await tasksRepo.update(boardId, taskId, newValues);
};

const deleteById = async taskToDel => await tasksRepo.del(taskToDel);

const updateTasks = async userId => await tasksRepo.resetUser(userId);

module.exports = {
  getAllByBoardId,
  createTask,
  getById,
  editTask,
  deleteById,
  updateTasks
};
