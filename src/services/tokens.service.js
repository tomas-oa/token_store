const {
  getAllTokensDB,
  updatePriceDB,
} = require("../db/tokens.db");

class TokensServices {
  getAllTokens = async() => {
    try {
      return await getAllTokensDB();
    } catch (error) {
      console.error(error);
    }
  }

  updatePrice = async(price, id) => {
    try {
      return await updatePriceDB({ price, id });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new TokensServices();