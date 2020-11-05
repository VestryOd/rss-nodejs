const { BadRequest } = require('http-errors');
const mongoose = require('mongoose');

const checkID = id => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new BadRequest('ID does not correct');
  }
  return id;
};

module.exports = checkID;
