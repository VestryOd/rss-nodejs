const Task = require('./task.model');

const getAllByBoardId = async boardId => {
  return await Task.find({ boardId });
};

const getById = async task => {
  const { boardId, taskId } = task;
  return await Task.findOne({ boardId, _id: taskId });
};

const add = async taskData => {
  const task = new Task({ ...taskData });
  await task.save();
  return task;
};

const update = async (boardId, _id, newData) => {
  const result = Task.findOneAndUpdate(
    { boardId, _id },
    newData,
    { new: true },
    err => {
      if (err) return false;
    }
  );
  return result ? `Task with id ${_id} was updated` : null;
};

const del = async taskToDel => {
  const { boardId, taskId } = taskToDel;
  const result = Task.findOneAndRemove({ boardId, _id: taskId }, err => {
    if (err) return false;
  });
  return result ? `Task with id ${taskId} was deleted` : null;
};

const clearByBordId = async boardId => {
  await Task.deleteMany({ boardId });
};

const resetUser = async userId => {
  await Task.updateMany({ userId }, { userId: null });
};

module.exports = {
  getAllByBoardId,
  getById,
  add,
  update,
  del,
  clearByBordId,
  resetUser
};
