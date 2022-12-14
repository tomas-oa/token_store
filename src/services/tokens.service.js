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

  updateTokenPrice = async (price, description, name, onsale, id) => {
    let token;

    try {
      token = await updateTokenPriceDB(price, description, name, onsale, id );
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
    name, ownerId, url, price, onsale, description,
  }) => {
    let token;

    try {
      token = await createTokenDB({
        name, ownerId, url, price, onsale, description,
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
