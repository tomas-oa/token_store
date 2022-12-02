const pool = require('../db');

const getUserCoinsDB = async (userId) => {
  const { rows: coins } = await pool.query(
    'SELECT amount FROM coins WHERE user_id = $1',
    [userId],
  );

  return coins;
};

const getAllCoinsDB = async () => {
  const { rows: coins } = await pool.query(
    'SELECT SUM(amount) FROM coins',
  );

  return coins;
};

module.exports = {
  getUserCoinsDB,
  getAllCoinsDB,
};
