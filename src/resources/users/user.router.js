const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(new User({ ...req.body }));
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.edit({ ...req.body, id: req.params.id });
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const message = await usersService.deleteUser(req.params.id);
  res.json(message);
});

module.exports = router;
