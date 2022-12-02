/* eslint-disable class-methods-use-this */
const {
  getUserCoinsDB,
  getAllCoinsDB,
} = require('../db/coins.db');

class CoinsService {
  getUserCoins = async (id) => {
    let coins;

    try {
      coins = await getUserCoinsDB(id);
    } catch (error) {
      console.error(error);
    }

    return coins;
  };

  getAllCoins = async () => {
    let coins;

    try {
      coins = await getAllCoinsDB();
    } catch (error) {
      console.error(error);
    }

    return coins;
  };
}

module.exports = new CoinsService();
