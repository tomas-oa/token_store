const SalesService = require('../services/sales.service');

const getAllSales = async (req, res, next) => {
  try {
    const sales = await SalesService.getAllSales();
    res.json(sales);
  } catch (error) {
    console.error(error);
  }
};

const getSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await SalesService.getSale(id);
    res.json(sale);
  } catch (error) {
    console.error(error);
  }
};

const createSale = async (req, res, next) => {
  try {
    const { token_id, seller_id, buyer_id, price } = req.body;

    const sale = await SalesService.createSale( token_id, seller_id, buyer_id, price );
    res.json(sale);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllSales,
  getSale,
  createSale,
};
