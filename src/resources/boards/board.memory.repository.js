const dbService = require('../../common/local-db/board-db');

const getAll = async () => dbService.getAllBoards();

const create = async board => dbService.createBoard(board);

const getById = async id => dbService.getBoardById(id);

const edit = async board => dbService.editBoard(board);

const deleteById = async id => dbService.deleteById(id);

module.exports = { getAll, getById, create, edit, deleteById };
