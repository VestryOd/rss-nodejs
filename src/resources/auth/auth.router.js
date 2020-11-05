const router = require('express').Router();
const { OK, BAD_REQUEST } = require('http-status-codes');
const auth = require('./auth.service');

router
  .route('/')
  .post(async (req, res, next) => {
    try {
      const { login, password } = req.body;
      res.status(OK).json(await auth(login, password));
    } catch (error) {
      return next(error);
    }
  })
  .all(async (req, res) => res.status(BAD_REQUEST).send());

module.exports = router;
