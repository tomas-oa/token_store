const pool = require('../db');

/*
  todas las ventas - OK
  ventas usuario por id - OK
  compras usuario por id - OK
*/
const getAllSalesDB = async () => {
  const { rows: sales } = await pool.query(
    'SELECT * FROM sales'
  );

  return sales;
};

const getSaleDB = async (id) => {
  const { rows: sale } = await pool.query(
    'SELECT * FROM sales WHERE seller_id = $1',
    [id]
  );

  return sale;
};

const createSaleDB = async ({ token_id, seller_id, buyer_id, price }) => {
  const transaction_date = getDate();

  const { rows: sale } = await pool.query(
    'INSERT INTO sales (token_id, seller_id, buyer_id, price, transaction_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [token_id, seller_id, buyer_id, price, transaction_date]
  );

  // update owner_id of token
  await pool.query(
    'UPDATE tokens SET owner_id = $1 WHERE id = $2',
    [buyer_id, token_id]
  );

  // update coins of buyer
  await pool.query(
    'UPDATE users SET coin = coin - $1 WHERE id = $2',
    [price, buyer_id]
  );

  // update coins of seller
  await pool.query(
    'UPDATE users SET coin = coin + $1 WHERE id = $2',
    [price, seller_id]
  );

  // add transaction to history table
  await pool.query(
    'INSERT INTO history (token_id, transaction_date) VALUES ($1, $2)',
    [token_id, transaction_date]
  );

  return sale;
};

const getDate = () => {
  const date  = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  
  return (dd + '/' + mm + '/' + yyyy);
};

module.exports = {
  getAllSalesDB,
  getSaleDB,
  createSaleDB,
};
