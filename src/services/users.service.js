const {
  getAllUsersDB,
  createUserDB,
  getUserDB,
  deleteUserDB,
  updateUserDB,
} = require("../db/users.db");

class UsersServices {
  getAllUsers = async() => {
    try {
      return await getAllUsersDB();
    } catch (error) {
      console.error(error);
    }
  }

  createUser = async( name, password, email ) => {
    try {
      return await createUserDB({ name, password, email });
    } catch (error) {
      console.error(error);
    }
  }

  getUser = async(id) => {
    try {
      return await getUserDB(id);
    } catch (error) {
      console.error(error);
    }
  }

  deleteUser = async(id) => {
    try {
      return await deleteUserDB(id);
    } catch (error) {
      console.error(error);
    }
  }

  updateUser = async({ name, password, email }) => {
    try {
      return await updateUserDB({ name, password, email });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new UsersServices();