const pool = require("../db");

const getAllUsersDB = async () => {
  const { rows: users } = await pool.query(
    "SELECT * FROM users"
  );

  return users;
};

const getUserDB = async ( id ) => {
  const { rows: user } = await pool.query(
    "SELECT * FROM users WHERE user_id = $1",
    [id]
  );

  return user;
}

const createUserDB = async ({ name, password, email }) => {
  const { rows: user } = await pool.query(
    "INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING *", 
    [name, password, email]
  );

  return user;
}

const updateUserDB = async ({ name, password, email }) => {
  const { rows: user } = await pool.query(
    // "INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING *", 
    [name, password, email]
  );

  return user;
}

const deleteUserDB = async( id ) => {
  const { rows: user } = await pool.query(
    "DELETE FROM users WHERE user_id = $1 RETURNING *",
    [id]
  );

  return user;
}

module.exports = {
  getAllUsersDB,
  getUserDB,
  createUserDB,
  deleteUserDB,
}
