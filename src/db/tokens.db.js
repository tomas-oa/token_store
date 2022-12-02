const pool = require('../db');
/*
  obtener todos los tokens - OK
  actualizar precio - OK
*/
const getAllTokensDB = async () => {
  const { rows: tokens } = await pool.query(
    'SELECT * FROM tokens',
  );

  return tokens;
};

const updateTokenPriceDB = async ({ price, id }) => {
  const { rows: token } = await pool.query(
    'UPDATE tokens SET price = $1 WHERE id = $2 RETURNING *',
    [price, id],
  );

  return token;
};

const getTokenDB = async (id) => {
  const { rows: token } = await pool.query(
    'SELECT * FROM tokens WHERE id = $1',
    [id],
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

module.exports = {
  getAllTokensDB,
  updateTokenPriceDB,
  getTokenDB,
  createTokenDB,
  deleteTokenDB,
};
