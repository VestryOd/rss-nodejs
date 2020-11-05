const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, default: 'Default board' },
    columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }]
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
