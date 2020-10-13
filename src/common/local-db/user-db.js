const DB = [
  {
    id: 'aaee83f5-1ffd-4102-9ff1-23fe96180908',
    name: 'John',
    login: 'john'
  },
  {
    id: '2309b5a5-cc1a-47d0-a6dc-29136f98d9a9',
    name: 'Smith',
    login: 'smith'
  },
  {
    id: 'd35c94ac-99ae-43df-a77d-ead39d6f4e77',
    name: 'Jane',
    login: 'jane'
  },
  {
    id: '00d2f54f-1e4e-4fe1-ad08-fe31ef2f21c4',
    name: 'Rene',
    login: 'rene'
  },
  {
    id: '8389fd93-c2c0-48a7-9b4c-ec75f134ec78',
    name: 'Bill',
    login: 'bill'
  },
  {
    id: '30be705b-f349-4977-b974-361bdf88b22d',
    name: 'Will',
    login: 'will'
  },
  {
    id: 'b2a306b9-bc41-4876-a73b-a30f283f74cd',
    name: 'Mick',
    login: 'mick'
  },
  {
    id: 'cdece964-6f76-4582-9ba1-7c6c39f7dae4',
    name: 'Michael',
    login: 'newUser'
  }
];

const findUser = id => {
  const user = {};
  DB.forEach((el, i) => {
    if (el.id === id) {
      user.index = i;
      user.data = { ...el };
    }
  });
  return user;
};

const getAllUsers = async () => Promise.resolve([...DB]);

const getUserById = async id => DB.filter(user => user.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return getUserById(user.id);
};

const editUser = async user => {
  const { data, index } = findUser(user.id);
  if (data && index) {
    DB[index] = {
      ...data,
      ...user
    };
  }
  return !data && !index ? null : getUserById(user.id);
};

const deleteById = async id => {
  const { data, index } = findUser(id);
  let deleted = null;
  if (data && index) {
    deleted = DB.splice(index, 1);
  }
  return !deleted || !deleted.length
    ? null
    : `User ${data.name} with id ${id} was deleted`;
};

module.exports = { getAllUsers, getUserById, createUser, editUser, deleteById };
