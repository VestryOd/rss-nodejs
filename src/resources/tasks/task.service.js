const tasksRepo = require('./task.db.repository');
const checkExistence = require('../../common/utils/checkExistence');
const checkID = require('../../common/utils/checkID');

const getAllTaksByBoardId = async boardId => {
  return await tasksRepo.getAllTasksByBoardId(checkID(boardId));
};

const addTask = async (
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) => {
  return await tasksRepo.addTask(
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );
};

const getTaskById = async (boardId, _id) => {
  return await checkExistence(
    tasksRepo.getTaskById,
    'TASK',
    checkID(boardId),
    checkID(_id)
  );
};

const updateTask = async (searchBoardId, _id, newValues) => {
  return await checkExistence(
    tasksRepo.updateTask,
    'TASK',
    checkID(searchBoardId),
    checkID(_id),
    newValues
  );
};

const deleteTask = async (boardId, _id) => {
  return await checkExistence(
    tasksRepo.deleteTask,
    'TASK',
    checkID(boardId),
    checkID(_id)
  );
};

module.exports = {
  getAllTaksByBoardId,
  addTask,
  getTaskById,
  updateTask,
  deleteTask
};
