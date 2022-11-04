const usersServices = require('../services/users.service');

const getAllUsers = async(req, res, next) => {
  try {
    const users = await usersServices.getAllUsers();

    if (users < 0) {
      return res.json({ error: 'No users found' });
    } 

    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async(req, res, next) => {
  try {
    const { name, password, email } = req.body;
    const user = await usersServices.createUser(name, password, email);

    if (user < 1) {
      return res.status(400).json({ message: 'Bad request' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

const getUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersServices.getUser(id);

    if (user < 1) {
      return res.status(404).json({ message: 'User not found' });
    }


    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersServices.deleteUser(id);

    if (user < 1) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// VERIFICAR SI HAY CAMPOS VACÍOS Y HACER UPDATES SEGÚN CORRESPONDA 
const updateUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const { name, password, email } = req.body;
    const user = await usersServices.updateUser(name, password, email, id);

    if (user < 1) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
