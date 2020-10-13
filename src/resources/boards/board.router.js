const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');
// const taskService = require('../tasks/task.service');
// const Task = require('../tasks/task.router');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  return res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(new Board({ ...req.body }));
  let response = null;
  if (board && Object.entries(board).length) {
    response = res.json(board);
  } else {
    response = res.status(400).send('"Can\'t create, check your request"');
  }
  return response;
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  let response = null;
  if (board && Object.entries(board).length) {
    response = res.json(board);
  } else {
    response = res
      .status(404)
      .send(`Board with id: ${req.params.id} not found`);
  }
  return response;
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.edit({ ...req.body, id: req.params.id });
  let response = null;
  if (board) {
    response = res.json(board);
  } else {
    response = res
      .status(400)
      .send(`Can't update, board with id: ${req.params.id} not found`);
  }
  return response;
});

router.route('/:id').delete(async (req, res) => {
  const message = await boardsService.deleteById(req.params.id);
  let response = null;
  if (message) {
    response = res.json(message);
  } else {
    response = res
      .status(404)
      .send(`Board with id: ${req.params.id} not found`);
  }
  return response;
});

router.use('/:boardId/tasks', taskRouter);

module.exports = router;
