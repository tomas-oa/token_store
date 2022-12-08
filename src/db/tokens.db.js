const pool = require('../db');

const getAllTokensDB = async () => {
  const { rows: tokens } = await pool.query(
    'select t.id, t.name as token_name, t.url, t.price, t.onsale, t.created_by as creator_id, t.description, u.id as owner_id, u.name as owner_name from tokens t join users u on t.owner_id = u.id',
  );

  return tokens;
};

const getTokenDB = async (id) => {
  const { rows: token } = await pool.query(
    'select u.id as creator_id, u.name as creator_name, o.* from users u join (select t.*, u.id as owner_id, u.name as owner_name from tokens t join users u on t.owner_id = u.id where t.id = $1) as o on u.id = o.created_by;',
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
    'SELECT t.id, t.name AS token_name, u.name AS owner_name,t.owner_id AS owner_id, t.url, t.price, t.onsale FROM tokens t JOIN users u ON t.owner_id = u.id WHERE t.owner_id = $1',
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
