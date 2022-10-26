const {
  getAllTokensDB,
  updatePriceDB,
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

  updatePrice = async ({ price, id }) => {
    try {
      return await updatePriceDB({ price, id });
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
