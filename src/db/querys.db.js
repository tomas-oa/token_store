const pool = require('../db');

const getMostFavoriteTokenDB = async () => {
  const { rows: token } = await pool.query(
    'SELECT u.name, u.email, c.token_count FROM users u JOIN (SELECT t.owner_id, COUNT(t.owner_id) AS token_count FROM tokens t GROUP BY t.owner_id LIMIT 1) AS c ON u.id = c.owner_id',
  );

  return token;
};

const getUserWithMostCoinsDB = async () => {
  const { rows: coins } = await pool.query(
    'SELECT c.user_id, c.amount, u.name FROM coins c JOIN users u ON c.user_id = u.id ORDER BY c.amount DESC LIMIT 3',
  );

  return coins;
};

const getMostSoldTokenDB = async () => {
  const { rows: token } = await pool.query(
    'select * from tokens t join (select token_id, count(token_id) from sales group by token_id order by count desc limit 1) as tmax on tmax.token_id = t.id;'
    );

  return token;
};

const getUserWithMostTokensDB = async () => {
  const { rows: tokens } = await pool.query(
    'SELECT u.name, u.email, c.token_count FROM users u JOIN (SELECT t.owner_id, COUNT(t.owner_id) AS token_count FROM tokens t GROUP BY t.owner_id LIMIT 1) AS c ON u.id = c.owner_id',
  );

  return tokens;
};

module.exports = {
  getMostFavoriteTokenDB,
  getUserWithMostCoinsDB,
  getMostSoldTokenDB,
  getUserWithMostTokensDB,
};
