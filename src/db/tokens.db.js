const pool = require("../db");
/* 
  obtener todos los tokens - OK
  actualizar precio - OK
*/
const getAllTokensDB = async () => {
  const { rows: tokens } = await pool.query(
    "SELECT * FROM tokens"
  );

  return tokens;
};

const updatePriceDB = async({ price, id }) => {
  const { rows: token } = await pool.query(
    "UPDATE tokens SET price = $1 WHERE token_id = $2 RETURNING *",
    [price, id]
  );

  return token;
}

module.exports = {
  getAllTokensDB,
  updatePriceDB,
}
