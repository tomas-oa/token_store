const pool = require("../db");
/*
  registro usuario - TODO HASH PASSWORD
  busqueda usuario - (múltiples) - OK 
  detalles usuario - (sólo un user) - OK
  borrar usuario - OK
  actualizar usuario -OK
*/
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
    "UPDATE users SET name = $1, password = $2, email = $3 WHERE user_id = $4 RETURNING *",
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
  updateUserDB,
}
