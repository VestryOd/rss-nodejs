const taskRepo = require('../tasks/task.db.repository');
const Board = require('./board.model');
const Column = require('./column.model');

const getAll = async () => {
  return await Board.find({}).populate({ path: 'columns' });
};

const getById = async boardId => {
  return await Board.findById(boardId).populate({ path: 'columns' });
};

const add = async (title, columnsArray) => {
  const newBoard = new Board({ title, columns: [] });
  columnsArray.forEach(el => {
    const newColumn = new Column({ ...el, boardId: newBoard._id });
    newBoard.columns.push(newColumn);
    newColumn.save();
  });
  await newBoard.save();
  return newBoard;
};

const update = async (boardId, title, columnsArray) => {
  const foundBoard = await getById(boardId);
  // if (foundBoard) {
  //   foundBoard.title = title;
  //   const newColumns = [];

  //   columnsArray.forEach(elem => {
  //     const column = foundBoard.columns.find(el => {
  //       return el.id === elem._id;
  //     });
  //     if (column) {
  //       column.updateOne({ title: column.title, order: column.order });
  //       newColumns.push(column);
  //     } else {
  //       const newColumn = new Column({ ...elem, boardId });
  //       newColumns.push(newColumn);
  //       newColumn.save();
  //     }
  //   });
  //   const oldColumns = foundBoard.columns;
  //   foundBoard.columns = newColumns;
  //   await foundBoard.save();
  //   oldColumns.forEach(x => {
  //     const isThere = columnsArray.find(y => y.id === x.id);
  //     if (!isThere) {
  //       Column.deleteOne({ id: x.id });
  //     }
  //   });
  //   return foundBoard;
  // }
  if (foundBoard) {
    foundBoard.title = title;

    foundBoard.columns.forEach(async x => {
      const column = columnsArray.find(y => y.id === x._id);
      if (column) {
        x.update({ title: column.title, order: column.order });
      }
    });
    await foundBoard.save();
    return foundBoard;
  }
  return null;
};

const del = async boardId => {
  const foundBoard = await Board.findById(boardId);
  if (foundBoard) {
    await Column.deleteMany({ boardId: foundBoard.id });
    await taskRepo.clearByBordId(boardId);
    await foundBoard.remove();
    return foundBoard;
  }
  return false;
};

module.exports = { getAll, getById, add, update, del };
