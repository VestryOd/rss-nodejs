const Board = require('./board.model');
const Column = require('./column/column.model');
const tasksRepo = require('../tasks/task.db.repository');

const getAllBoards = async () => {
  return await Board.find({}).populate({ path: 'columns' });
};

const addBoard = async (title, columnsArr) => {
  const board = new Board({ title, columns: [] });

  columnsArr.forEach(el => {
    const newColumn = new Column({ ...el, boardId: board._id });
    board.columns.push(newColumn);
    newColumn.save();
  });
  await board.save();
  return board;
};

const getBoardById = async boardId => {
  return await Board.findById(boardId).populate({ path: 'columns' });
};

const updateBoard = async (boardId, title, columnsArr) => {
  const board = await getBoardById(boardId);
  if (board) {
    board.title = title;
    board.columns.forEach(async element => {
      const column = columnsArr.find(el => el.id === element._id);
      if (column) {
        element.update({ title: column.title, order: column.order });
      }
    });
    await board.save();
    return board;
  }
  return null;
};

const deleteBoard = async boardId => {
  const board = await getBoardById(boardId);
  if (board) {
    board.columns.forEach(el => el.remove());
    await tasksRepo.deleteByBoardId(boardId);
    await board.remove();
    return board;
  }
  return false;
};

module.exports = {
  getAllBoards,
  addBoard,
  getBoardById,
  updateBoard,
  deleteBoard
};
