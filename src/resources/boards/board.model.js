const mongoose = require('mongoose');
const uuid = require('uuid');

// class Column {
//   constructor({ id = uuid(), title = 'ColumnTitle', order = 0 } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//   }
// }

// function generateColumns(arr) {
//   return !arr.length ? [] : arr.map(col => new Column({ ...col }));
// }

// class Board {
//   constructor({ id = uuid(), title = 'BoardTitle', columns = [] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = generateColumns(columns);
//   }
// }

const boardSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuid },
    title: { type: String, default: 'Default board' },
    columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }]
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
