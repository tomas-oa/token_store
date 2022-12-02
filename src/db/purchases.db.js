const pool = require('../db');

const getPurchasesDB = async (id) => {
  const { rows: purchases } = await pool.query(
    'SELECT tokens.id, tokens.name, tokens.url, tokens.price, tokens.state, tokens.owner_id FROM tokens JOIN sales ON tokens.id = sales.token_id WHERE sales.buyer_id = $1',
    [id],
  );

  return purchases;
};

module.exports = {
  getPurchasesDB,
};
