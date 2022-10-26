const pool = require('../db');

const getHistoryDB = async () => {
  const { rows: history } = await pool.query(
    'SELECT * FROM history'
  );

  return history;
};

module.exports = {
  getHistoryDB,
};
