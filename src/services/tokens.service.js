const {
  getAllTokensDB,
  updateTokenPriceDB,
  getTokenDB,
} = require('../db/tokens.db');

class TokensService {
  getAllTokens = async () => {
    try {
      return await getAllTokensDB();
    } catch (error) {
      console.error(error);
    }
  };

  updateTokenPrice = async ( price, id ) => {
    try {
      return await updateTokenPriceDB({ price, id });
    } catch (error) {
      console.error(error);
    }
  };

  getToken = async (id) => {
    try {
      return await getTokenDB(id);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new TokensService();
