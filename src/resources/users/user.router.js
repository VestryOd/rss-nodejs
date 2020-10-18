const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { catchErrors, CustomError } = require('../../common/utills');

router
  .route('/')
  .get(
    catchErrors(async (req, res, next) => {
      const users = await usersService.getAll();
      if (users) {
        res.status(200).json(users.map(User.toResponse));
      } else {
        return next(new CustomError({ status: 400, message: 'Bad request' }));
      }
    })
  )
  .post(
    catchErrors(async (req, res, next) => {
      const user = await usersService.create(new User({ ...req.body }));
      if (user && Object.entries(user).length) {
        res.status(200).json(User.toResponse(user));
      } else {
        return next(
          new CustomError({
            status: 404,
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
      const user = await usersService.getById(req.params.id);
      if (user && Object.entries(user).length) {
        res.status(200).json(User.toResponse(user));
      } else {
        return next(
          new CustomError({
            status: 404,
            message: `User with id: ${req.params.id} not found`
          })
        );
      }
    })
  )
  .put(
    catchErrors(async (req, res, next) => {
      const user = await usersService.edit({ ...req.body, id: req.params.id });
      if (user && Object.entries(user).length) {
        res.status(200).json(User.toResponse(user));
      } else {
        return next(
          new CustomError({
            status: 400,
            message: `Can't update, user with id: ${req.params.id} not found`
          })
        );
      }
    })
  )
  .delete(
    catchErrors(async (req, res, next) => {
      const message = await usersService.deleteById(req.params.id);
      if (message) {
        res.status(204).json(User.toResponse(message));
      } else {
        return next(
          new CustomError({
            status: 404,
            message: `User with id: ${req.params.id} not found`
          })
        );
      }
    })
  );

module.exports = router;
