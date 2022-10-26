const {
  getAllSalesDB,
  getSaleDB,
  getPurchasesDB,
} = require('../db/sales.db');

class SalesService {
  getAllSales = async () => {
    try {
      return await getAllSalesDB();
    } catch (error) {
      console.error(error);
    }
  };

  getSale = async (id) => {
    try {
      return await getSaleDB(id);
    } catch (error) {
      console.error(error);
    }
  };

  getPurchases = async (id) => {
    try {
      return await getPurchasesDB(id);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new SalesService();
