/* eslint-disable class-methods-use-this */
const {
  getAllTokensDB,
  updateTokenPriceDB,
  getTokenDB,
} = require('../db/tokens.db');

class TokensService {
  getAllTokens = async () => {
    let tokens;
    try {
      tokens = await getAllTokensDB();
    } catch (error) {
      console.error(error);
    }

    return tokens;
  };

  updateTokenPrice = async (price, id) => {
    let token;

    try {
      token = await updateTokenPriceDB({ price, id });
    } catch (error) {
      console.error(error);
    }

    return token;
  };

  getToken = async (id) => {
    let token;

    try {
      token = await getTokenDB(id);
    } catch (error) {
      console.error(error);
    }

    return token;
  };
}

module.exports = new TokensService();
