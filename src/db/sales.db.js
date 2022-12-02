const pool = require('../db');

/*
  todas las ventas - OK
  ventas usuario por id - OK
  compras usuario por id - OK
*/
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

const getDate = () => {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return (`${dd}/${mm}/${yyyy}`);
};

const createSaleDB = async ({
  tokenId, sellerId, buyerId, price,
}) => {
  const transactionDate = getDate();

  const { rows: sale } = await pool.query(
    'INSERT INTO sales (tokenId, sellerId, buyerId, price, transactionDate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [tokenId, sellerId, buyerId, price, transactionDate],
  );

  // update owner_id of token
  await pool.query(
    'UPDATE tokens SET owner_id = $1 WHERE id = $2',
    [buyerId, tokenId],
  );

  // update coins of buyer
  await pool.query(
    'UPDATE users SET coin = coin - $1 WHERE id = $2',
    [price, buyerId],
  );

  // update coins of seller
  await pool.query(
    'UPDATE users SET coin = coin + $1 WHERE id = $2',
    [price, sellerId],
  );

  // add transaction to history table
  await pool.query(
    'INSERT INTO history (tokenId, transactionDate) VALUES ($1, $2)',
    [tokenId, transactionDate],
  );

  return sale;
};

module.exports = {
  getAllSalesDB,
  getSaleDB,
  createSaleDB,
};
