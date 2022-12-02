const pool = require('../db');

const getAllSalesDB = async () => {
  const { rows: sales } = await pool.query(
    'SELECT * FROM sales',
  );

  return sales;
};

const getSaleDB = async (id) => {
  const { rows: sale } = await pool.query(
    'SELECT * FROM sales WHERE sellerId = $1',
    [id],
  );

  return sale;
};

const createSaleDB = async ({
  tokenId, sellerId, buyerId, price,
}) => {
  const { rows: sale } = await pool.query(
    'INSERT INTO sales (tokenId, sellerId, buyerId, price) VALUES ($1, $2, $3, $4) RETURNING *',
    [tokenId, sellerId, buyerId, price],
  );

  // update owner_id of token
  await pool.query(
    'UPDATE tokens SET owner_id = $1 WHERE id = $2',
    [buyerId, tokenId],
  );

  // update coins of buyer
  await pool.query(
    'UPDATE coins SET amount = amount - $1 WHERE user_id = $2',
    [price, buyerId],
  );

  // update coins of seller
  await pool.query(
    'UPDATE coins SET amount = amount + $1 WHERE user_id = $2',
    [price, sellerId],
  );

  return sale;
};

module.exports = {
  getAllSalesDB,
  getSaleDB,
  createSaleDB,
};
