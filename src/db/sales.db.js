const pool = require('../db');

const getAllSalesDB = async () => {
  const { rows: sales } = await pool.query(
    'SELECT sales.id as sale_id, buyer.id as buyer_id, buyer.name as buyer_name, seller.id as seller_id, seller.name as seller_name, tokens.id as token_id, tokens.name as token_name, sales.price, sales.transaction_date FROM sales JOIN users AS buyer ON sales.buyer_id = buyer.id INNER JOIN users as seller ON sales.seller_id = seller.id INNER JOIN tokens ON sales.token_id = tokens.id',
  );

  return sales;
};

const getSaleDB = async (id) => {
  const { rows: sale } = await pool.query(
    'SELECT sales.id, buyer.name as buyer_name, seller.name as seller_name, tokens.name as token_name, sales.price, sales.transaction_date FROM sales JOIN users AS buyer ON sales.buyer_id = buyer.id INNER JOIN users as seller ON sales.seller_id = seller.id INNER JOIN tokens ON sales.token_id = tokens.id WHERE seller.id = $1',
    [id],
  );

  return sale;
};

const onSaleDB = async (tokenId) => {
  const { rows: sale } = await pool.query(
    'SELECT onsale FROM sales WHERE token_id = $1',
    [tokenId],
  );

  return sale;
};

const createSaleDB = async ({
  tokenId, sellerId, buyerId, price,
}) => {
  const { rows: sale } = await pool.query(
    'INSERT INTO sales (token_id, seller_id, buyer_id, price) VALUES ($1, $2, $3, $4) RETURNING *',
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
  onSaleDB,
};
