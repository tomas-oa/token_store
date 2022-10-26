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
    'SELECT * FROM sales WHERE buyer_id = $1',
    [id]
  );

  return sale;
};

const getPurchasesDB = async (id) => {
  const { rows: purchases } = await pool.query(
    'SELECT * FROM sales WHERE buyer_id = $1',
    [id]
  );

  return purchases;
};

const createSaleDB = async ({ token_id, seller_id, buyer_id, price, transaction_date }) => {
  const { rows: sale } = await pool.query(
    'INSERT INTO sales (token_id, seller_id, buyer_id, price, transaction_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [token_id, seller_id, buyer_id, price, transaction_date]
  );

  return sale;
};

module.exports = {
  getAllSalesDB,
  getSaleDB,
  getPurchasesDB,
  createSaleDB,
};
