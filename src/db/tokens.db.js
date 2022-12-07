const pool = require('../db');

const getAllTokensDB = async () => {
  const { rows: tokens } = await pool.query(
    'SELECT t.id, t.name AS token_name, u.name AS owner_name, u.id as owner_id, t.url, t.price, t.onsale, t.created_by AS creator_id, c.name AS created_by, t.description FROM tokens t JOIN users u ON t.owner_id = u.id JOIN (SELECT u.name, t.created_by FROM tokens t JOIN users u ON t.created_by = u.id) AS c ON t.created_by = c.created_by',
  );

  return tokens;
};

const getTokenDB = async (id) => {
  const { rows: token } = await pool.query(
    'SELECT t.id, t.name AS token_name, fav.fav_count, u.name AS owner_name, u.id as owner_id, t.url, t.price, t.onsale, t.created_by AS creator_id, c.name AS created_by, t.description FROM tokens t JOIN users u ON t.owner_id = u.id JOIN (SELECT f.token_id, count(token_id) AS fav_count FROM favorites f WHERE token_id = $1 GROUP BY(f.token_id)) AS fav ON t.id = fav.token_id JOIN (SELECT u.name, t.created_by FROM tokens t JOIN users u ON t.created_by = u.id) AS c ON t.created_by = c.created_by WHERE t.id = $1',
    [id],
  );

  return token;
};

const updateTokenPriceDB = async ({ price, id }) => {
  const { rows: token } = await pool.query(
    'UPDATE tokens SET price = $1 WHERE id = $2 RETURNING *',
    [price, id],
  );

  return token;
};

const createTokenDB = async ({
  name, ownerId, url, price, onsale, description,
}) => {
  const { rows: token } = await pool.query(
    'INSERT INTO tokens (name, owner_id, url, price, onsale, created_by, description) VALUES ($1, $2, $3, $4, $5, $2, $6) RETURNING *',
    [name, ownerId, url, price, onsale, description],
  );

  console.log(token);

  return token;
};

const deleteTokenDB = async (id) => {
  const { rows: token } = await pool.query(
    'DELETE FROM tokens WHERE id = $1 RETURNING *',
    [id],
  );

  return token;
};

const getUserTokensDB = async (id) => {
  const { rows: tokens } = await pool.query(
    'SELECT t.id, t.name AS token_name, u.name AS owner_name, t.url, t.price, t.onsale FROM tokens t JOIN users u ON t.owner_id = u.id WHERE t.owner_id = $1',
    [id],
  );

  return tokens;
};

module.exports = {
  getAllTokensDB,
  updateTokenPriceDB,
  getTokenDB,
  createTokenDB,
  deleteTokenDB,
  getUserTokensDB,
};
