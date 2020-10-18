const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const Task = require('./task.model');
const { catchErrors, CustomError } = require('../../common/utills');

router
  .route('/')
  .get(
    catchErrors(async (req, res, next) => {
      const tasks = await taskService.getAllByBoardId(req.params.boardId);
      if (tasks) {
        res.status(200).json(tasks);
      } else {
        return next(new CustomError({ status: 400, message: 'Bad request' }));
      }
    })
  )
  .post(
    catchErrors(async (req, res, next) => {
      const task = await taskService.createTask(
        new Task({ ...req.body, boardId: req.params.boardId })
      );
      if (task) {
        res.status(200).json(task);
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
  .route('/:taskId')
  .get(
    catchErrors(async (req, res, next) => {
      const task = await taskService.getById(req.params.taskId);
      if (task && Object.entries(task).length) {
        res.status(200).json(task);
      } else {
        return next(
          new CustomError({
            status: 404,
            message: `Task with id: ${req.params.taskId} not found`
          })
        );
      }
    })
  )
  .put(
    catchErrors(async (req, res, next) => {
      const task = await taskService.editTask({
        ...req.body,
        boardId: req.params.boardId,
        id: req.params.taskId
      });
      if (task) {
        res.status(200).json(task);
      } else {
        return next(
          new CustomError({
            status: 400,
            message: `Can't update, task with id: ${req.params.taskId} not found`
          })
        );
      }
    })
  )
  .delete(
    catchErrors(async (req, res, next) => {
      const message = await taskService.deleteById(req.params.taskId);
      if (message) {
        res.status(204).json(message);
      } else {
        return next(
          new CustomError({
            status: 404,
            message: `Task with id: ${req.params.taskId} not found`
          })
        );
      }
    })
  );

module.exports = router;
