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

const getTopCoinsDB = async () => {
  const { rows: coins } = await pool.query(
    'SELECT c.user_id, c.amount, u.name FROM coins c JOIN users u ON c.user_id = u.id ORDER BY c.amount DESC LIMIT 3',
  );

  return coins;
};

module.exports = {
  getUserCoinsDB,
  getAllCoinsDB,
  getTopCoinsDB,
};
