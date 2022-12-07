const usersServices = require('../services/users.service');

const getAllUsers = async (req, res) => {
  const users = await usersServices.getAllUsers();
  try {
    if (users < 0) {
      return res.json({ error: 'No users found' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(users);
};

const createUser = async (req, res) => {
  const { name, password, email } = req.body;
  const user = await usersServices.createUser(name, password, email);

  try {
    if (user < 1) {
      return res.status(400).json({ message: 'Bad request' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(user);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await usersServices.getUser(id);
  try {
    if (user < 1) {
      return res.status(404).json({ message: 'User not found' });
    }

  } catch (error) {
    console.error(error);
  }

  return res.json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await usersServices.deleteUser(id);
  try {
    if (user < 1) {
      return res.status(404).json({ message: 'User not found' });
    }

  } catch (error) {
    console.log(error);
  }

  return res.json(user);
};

// VERIFICAR SI HAY CAMPOS VACÍOS Y HACER UPDATES SEGÚN CORRESPONDA
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, password, email } = req.body;
  const user = await usersServices.updateUser(name, password, email, id);
  try {
    if (user < 1) {
      return res.status(404).json({ message: 'User not found' });
    }

  } catch (error) {
    console.error(error);
  }

  return res.json(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
