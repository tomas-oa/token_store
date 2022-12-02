/* eslint-disable class-methods-use-this */
const {
  getPurchasesDB,
} = require('../db/purchases.db');

class PurchasesService {
  static getPurchases = async (id) => {
    let purchases;

    try {
      purchases = await getPurchasesDB(id);
    } catch (error) {
      console.error(error);
    }

    return purchases;
  };
}

module.exports = new PurchasesService();
