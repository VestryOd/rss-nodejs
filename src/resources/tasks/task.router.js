const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
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
      const { title, order, description, userId, columnId } = req.body;
      const boardId = req.params.boardId;
      const task = await taskService.createTask({
        title,
        order,
        description,
        userId,
        boardId,
        columnId
      });
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
      const { boardId, taskId } = req.params;
      const task = await taskService.getById({ boardId, taskId });
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
      const { title, order, description, userId, boardId, columnId } = req.body;
      const task = await taskService.editTask(
        req.params.boardId,
        req.params.taskId,
        {
          title,
          order,
          description,
          userId,
          boardId,
          columnId
        }
      );
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
      const { boardId, taskId } = req.params;
      const message = await taskService.deleteById({ boardId, taskId });
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
