/* eslint-disable class-methods-use-this */
const {
  getAllSalesDB,
  getSaleDB,
  createSaleDB,
} = require('../db/sales.db');

class SalesService {
  getAllSales = async () => {
    let sales;

    try {
      sales = await getAllSalesDB();
    } catch (error) {
      console.error(error);
    }

    return sales;
  };

  getSale = async (id) => {
    let sales;

    try {
      sales = await getSaleDB(id);
    } catch (error) {
      console.error(error);
    }

    return sales;
  };

  createSale = async (tokenId, sellerId, buyerId, price) => {
    let sale;

    try {
      sale = await createSaleDB({
        tokenId, sellerId, buyerId, price,
      });
    } catch (error) {
      console.error(error);
    }

    return sale;
  };
}

module.exports = new SalesService();
