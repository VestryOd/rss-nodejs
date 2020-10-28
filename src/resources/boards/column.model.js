const mongoose = require('mongoose');
const uuid = require('uuid');

const columnSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuid },
    title: { type: String, default: 'new Column' },
    order: { type: Number, default: 0 },
    boardId: String
  },
  { versionKey: false }
);

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
