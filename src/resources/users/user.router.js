const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  return res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  let response = null;
  if (user && Object.entries(user).length) {
    response = res.json(User.toResponse(user));
  } else {
    response = res.status(404).send(`User with id: ${req.params.id} not found`);
  }
  return response;
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(new User({ ...req.body }));
  let response = null;
  if (user && Object.entries(user).length) {
    response = res.json(User.toResponse(user));
  } else {
    response = res.status(400).send('"Can\'t create, check your request"');
  }
  return response;
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.edit({ ...req.body, id: req.params.id });
  let response = null;
  if (user) {
    response = res.json(User.toResponse(user));
  } else {
    response = res
      .status(400)
      .send(`Can't update, user with id: ${req.params.id} not found`);
  }
  return response;
});

router.route('/:id').delete(async (req, res) => {
  const message = await usersService.deleteById(req.params.id);
  let response = null;
  if (message) {
    response = res.json(message);
  } else {
    response = res.status(404).send(`User with id: ${req.params.id} not found`);
  }
  return response;
});

module.exports = router;
