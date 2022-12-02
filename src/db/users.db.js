const pool = require('../db');

const getAllUsersDB = async () => {
  const { rows: users } = await pool.query(
    'SELECT * FROM users',
  );

  return users;
};

const getUserDB = async (id) => {
  const { rows: user } = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id],
  );

  return user;
};

const createUserDB = async ({ name, password, email }) => {
  if (!name || !password || !email) {
    return { error: 'Missing fields' };
  }

  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' };
  }

  const { rows: user } = await pool.query(
    'INERT INTO users (name, password, email) VALUES ($1, crypt($2, gen_salt("md5")), $3) RETURNING *',
    [name, password, email],
  );

  return user;
};

const updateUserDB = async ({
  name, password, email, id,
}) => {
  const { rows: user } = await pool.query(
    'UPDATE users SET name = $1, password = $2, email = $3 WHERE id = $4 RETURNING *',
    [name, password, email, id],
  );

  return user;
};

// TODO: delete user + all tokens and favorites
const deleteUserDB = async (id) => {
  const { rows: user } = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id],
  );

  return user;
};

module.exports = {
  getAllUsersDB,
  getUserDB,
  createUserDB,
  deleteUserDB,
  updateUserDB,
};
