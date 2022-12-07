/* eslint-disable class-methods-use-this */
const {
  getMostFavoriteTokenDB,
  getUserWithMostCoinsDB,
  getMostSoldTokenDB,
  getUserWithMostTokensDB,
} = require('../db/querys.db');

class QuerysServices {
  getMostFavoriteToken = async () => {
    let token;

    try {
      token = await getMostFavoriteTokenDB();
    } catch (error) {
      return error;
    }

    return token;
  };

  getUserWithMostCoins = async () => {
    let coins;

    try {
      coins = await getUserWithMostCoinsDB();
    } catch (error) {
      return error;
    }

    return coins;
  };

  getMostSoldToken = async () => {
    let token;

    try {
      token = await getMostSoldTokenDB();
    } catch (error) {
      return error;
    }

    return token;
  };

  getUserWithMostTokens = async () => {
    let tokens;

    try {
      tokens = await getUserWithMostTokensDB();
    } catch (error) {
      return error;
    }

    return tokens;
  };
}

module.exports = new QuerysServices();
