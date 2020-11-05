const Task = require('./task.model');

const getAllTasksByBoardId = async boardId => {
  return await Task.find({ boardId });
};

const addTask = async (
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) => {
  const newTask = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });
  await newTask.save();
  return newTask;
};

const getTaskById = async (boardId, _id) => {
  return await Task.findOne({ boardId, _id });
};

const updateTask = async (boardId, _id, newValues) => {
  const foundTask = Task.findOne({ boardId, _id });
  if (foundTask) {
    await foundTask.update(newValues);
  }
  return foundTask;
};

const deleteTask = async (boardId, _id) => {
  const foundTask = Task.findOne({ boardId, _id });
  if (foundTask) {
    await foundTask.remove();
    return foundTask;
  }
  return false;
};

const deleteByBoardId = async boardId => {
  await Task.deleteMany({ boardId });
};

const resetUser = async userId => {
  await Task.updateMany({ userId }, { userId: null });
};

module.exports = {
  getAllTasksByBoardId,
  addTask,
  getTaskById,
  updateTask,
  deleteTask,
  deleteByBoardId,
  resetUser
};
