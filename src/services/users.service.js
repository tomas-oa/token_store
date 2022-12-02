/* eslint-disable class-methods-use-this */
const {
  getAllUsersDB,
  createUserDB,
  getUserDB,
  deleteUserDB,
  updateUserDB,
} = require('../db/users.db');

class UsersServices {
  getAllUsers = async () => {
    let users;

    try {
      users = await getAllUsersDB();
    } catch (error) {
      return error;
    }

    return users;
  };

  createUser = async (name, password, email) => {
    let user;

    try {
      user = await createUserDB({ name, password, email });
      // console.log(user);
    } catch (error) {
      return (error);
    }

    return user;
  };

  getUser = async (id) => {
    let user;

    try {
      user = await getUserDB(id);
    } catch (error) {
      console.error(error);
    }

    return user;
  };

  deleteUser = async (id) => {
    let user;

    try {
      user = await deleteUserDB(id);
    } catch (error) {
      console.error(error);
    }

    return user;
  };

  updateUser = async (name, password, email, id) => {
    let user;

    try {
      user = await updateUserDB({
        name, password, email, id,
      });
    } catch (error) {
      console.error(error);
    }

    return user;
  };
}

module.exports = new UsersServices();
