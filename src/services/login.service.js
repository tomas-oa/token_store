/* eslint-disable class-methods-use-this */
const {
  loginDB,
} = require('../db/login.db');

class LoginServices {
  login = async (email, password) => {
    let user;

    try {
      user = await loginDB(email, password);
    } catch (error) {
      return error;
    }

    return user;
  };
}

module.exports = new LoginServices();
