const {
  getPurchasesDB,
} = require('../db/purchases.db');

class PurchasesService {
  getPurchases = async (id) => {
    try {
      return await getPurchasesDB(id);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new PurchasesService();