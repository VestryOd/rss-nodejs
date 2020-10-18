const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');
const { catchErrors, CustomError } = require('../../common/utills');

router
  .route('/')
  .get(
    catchErrors(async (req, res, next) => {
      const boards = await boardsService.getAll();
      if (boards) {
        res.status(200).json(boards);
      } else {
        return next(new CustomError({ status: 400, message: 'Bad request' }));
      }
    })
  )
  .post(
    catchErrors(async (req, res, next) => {
      const board = await boardsService.create(new Board({ ...req.body }));
      if (board && Object.entries(board).length) {
        res.status(200).json(board);
      } else {
        return next(
          new CustomError({
            status: 400,
            message: '"Can\'t create, check your request"'
          })
        );
      }
    })
  );

router
  .route('/:id')
  .get(
    catchErrors(async (req, res, next) => {
      const board = await boardsService.getById(req.params.id);
      if (board && Object.entries(board).length) {
        res.status(200).json(board);
      } else {
        return next(
          new CustomError({
            status: 404,
            message: `Board with id: ${req.params.id} not found`
          })
        );
      }
    })
  )
  .put(
    catchErrors(async (req, res, next) => {
      const board = await boardsService.edit({
        ...req.body,
        id: req.params.id
      });
      if (board) {
        res.status(200).json(board);
      } else {
        return next(
          new CustomError({
            status: 400,
            message: `Can't update, board with id: ${req.params.id} not found`
          })
        );
      }
    })
  )
  .delete(
    catchErrors(async (req, res, next) => {
      const message = await boardsService.deleteById(req.params.id);
      if (message) {
        res.status(204).json(message);
      } else {
        return next(
          new CustomError({
            status: 404,
            message: `Board with id: ${req.params.id} not found`
          })
        );
      }
    })
  );

router.use('/:boardId/tasks', taskRouter);

module.exports = router;
