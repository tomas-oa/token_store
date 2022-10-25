const pool = require("../db");

/*
  todas las ventas - OK
  ventas usuario por id - OK
  compras usuario por id - OK
*/
const getAllSalesDB = async () => {
  const { rows: sales } = await pool.query(
    "SELECT * FROM sales"
  );

  return sales;
}

const getSaleDB = async (id) => {
  const { rows: sale } = await pool.query(
    "SELECT * FROM sales WHERE id = $1",
    [id]
  );

  return sale;
}

const getPurchasesDB = async (id) => {
  const { rows: purchases } = await pool.query(
    "SELECT * FROM sales WHERE buyer_id = $1",
    [id]
  );

  return purchases;
}

module.exports = {
  getAllSalesDB,
  getSaleDB,
  getPurchasesDB,
}
