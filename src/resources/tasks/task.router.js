const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const Task = require('./task.model');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAllByBoardId(req.params.boardId);
  return res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await taskService.createTask(
    new Task({ ...req.body, boardId: req.params.boardId })
  );
  let response = null;
  if (task && Object.entries(task).length) {
    response = res.json(task);
  } else {
    response = res.status(400).send('"Can\'t create, check your request"');
  }
  return response;
});

router.route('/:taskId').get(async (req, res) => {
  const task = await taskService.getById(req.params.taskId);
  let response = null;
  if (task && Object.entries(task).length) {
    response = res.json(task);
  } else {
    response = res
      .status(404)
      .send(`Task with id: ${req.params.taskId} not found`);
  }
  return response;
});

router.route('/:taskId').put(async (req, res) => {
  const task = await taskService.editTask({
    ...req.body,
    boardId: req.params.boardId,
    id: req.params.taskId
  });
  let response = null;
  if (task) {
    response = res.json(task);
  } else {
    response = res
      .status(400)
      .send(`Can't update, task with id: ${req.params.taskId} not found`);
  }
  return response;
});

router.route('/:taskId').delete(async (req, res) => {
  const message = await taskService.deleteById(req.params.taskId);
  let response = null;
  if (message) {
    response = res.json(message);
  } else {
    response = res
      .status(404)
      .send(`Task with id: ${req.params.taskId} not found`);
  }
  return response;
});

module.exports = router;
