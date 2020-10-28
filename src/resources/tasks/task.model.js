const mongoose = require('mongoose');
const uuid = require('uuid');

// class Task {
//   constructor({
//     id = uuid(),
//     title = 'TITLE',
//     order = 0,
//     description = '',
//     userId = '',
//     boardId = '',
//     columnId = ''
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//     this.description = description;
//     this.userId = userId;
//     this.boardId = boardId;
//     this.columnId = columnId;
//   }

//   static toResponse(task) {
//     const { id, title, order, description, userId } = task;
//     return { id, title, order, description, userId };
//   }
// }

const taskSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuid },
    title: { type: String, default: 'New task' },
    description: { type: String, default: 'New task description' },
    order: { type: Number, default: 0 },
    boardId: String,
    columnId: String,
    userId: String
  },
  { versionKey: false }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
