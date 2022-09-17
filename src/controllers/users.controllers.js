const usersServices = require("../services/users.service");

const getAllUsers = async(req, res, next) => {
  try {
    const users = await usersServices.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
}

const createUser = async(req, res, next) => {
  try {
    const { name, password, email } = req.body;
    const user = await usersServices.createUser(name, password, email);

    res.json(user);
  } catch (error) {
    console.error(error);
  }
}

const getUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersServices.getUser(id);

    res.json(user);
  } catch (error) {
    console.error(error);
  }
}

const deleteUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersServices.deleteUser(id);

    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
}
