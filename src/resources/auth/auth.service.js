const { Forbidden } = require('http-errors');
const userService = require('../users/user.service');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');

const auth = async (login, password) => {
  const foundUser = await userService.getUserByLogin(login);
  if (foundUser) {
    if (await bcrypt.compare(password, foundUser.password)) {
      const token = {
        token: jsonWebToken.sign(
          { userId: foundUser.id, login },
          JWT_SECRET_KEY
        )
      };
      return token;
    }
  }
  throw new Forbidden();
};

module.exports = auth;
