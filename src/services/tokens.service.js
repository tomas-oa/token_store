/* eslint-disable class-methods-use-this */
const {
  getAllTokensDB,
  updateTokenPriceDB,
  getTokenDB,
  createTokenDB,
  deleteTokenDB,
  getUserTokensDB,
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

  createToken = async ({
    name, url, price, state, ownerId,
  }) => {
    let token;

    try {
      token = await createTokenDB({
        name, url, price, state, ownerId,
      });
    } catch (error) {
      console.error(error);
    }

    return token;
  };

  deleteToken = async (id) => {
    let token;

    try {
      token = await deleteTokenDB(id);
    } catch (error) {
      console.error(error);
    }

    return token;
  };

  getUserTokens = async (id) => {
    let tokens;

    try {
      tokens = await getUserTokensDB(id);
    } catch (error) {
      console.error(error);
    }

    return tokens;
  };
}

module.exports = new TokensService();
