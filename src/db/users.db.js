const bcrypt = require('bcryptjs');
const pool = require('../db');

const getAllUsersDB = async () => {
  const { rows: users } = await pool.query(
    'SELECT u.id, u.name, u.email, c.amount FROM users u JOIN coins c ON u.id = c.user_id',
  );

  return users;
};

const getUserDB = async (id) => {
  const { rows: user } = await pool.query(
    'SELECT u.id, u.name, u.email, c.amount FROM users u JOIN coins c ON u.id = c.user_id WHERE u.id = $1',
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

  const hashedPassword = await bcrypt.hash(password, 10);

  const { rows: user } = await pool.query(
    'INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING *',
    [name, hashedPassword, email],
  );

  await pool.query(
    'INSERT INTO coins (user_id) VALUES ($1)',
    [user[0].id],
  );

  const { rows: userInfo } = await pool.query(
    'SELECT u.name, u.email, c.amount FROM users u JOIN coins c ON u.id = c.user_id WHERE u.id = $1',
    [user[0].id],
  );

  return userInfo;
};

const updateUserDB = async ({
  name, password, email, id,
}) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const { rows: user } = await pool.query(
    'UPDATE users SET name = $1, password = $2, email = $3 WHERE id = $4 RETURNING *',
    [name, hashedPassword, email, id],
  );

  return user;
};

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
