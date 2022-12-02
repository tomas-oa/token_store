const pool = require('../db');

const getAllTokensDB = async () => {
  const { rows: tokens } = await pool.query(
    'SELECT t.id, t.name AS token_name, u.name AS owner_name, t.url, t.price, t.onsale FROM tokens t JOIN users u ON t.owner_id = u.id',
  );

  return tokens;
};

const getTokenDB = async (id) => {
  const { rows: token } = await pool.query(
    'SELECT t.id, t.name AS token_name, u.name AS owner_name, t.url, t.price, t.onsale FROM tokens t JOIN users u ON t.owner_id = u.id WHERE t.id = $1',
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
  name, url, price, state, ownerId,
}) => {
  const { rows: token } = await pool.query(
    'INSERT INTO tokens (name, url, price, state, owner_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, url, price, state, ownerId],
  );

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
