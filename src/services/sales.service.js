const {
  getAllSalesDB,
  getSaleDB,
  getPurchasesDB,
  createSaleDB,
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

  createSale = async ( token_id, seller_id, buyer_id, price ) => {
    try {
      return await createSaleDB({ token_id, seller_id, buyer_id, price });
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new SalesService();
