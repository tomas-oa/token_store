const SalesService = require("../services/sales.service");

const getAllSales = async (req, res, next) => {
  try {
    const sales = await SalesService.getAllSales();
    res.json(sales);
  } catch (error) {
    console.error(error);
  }
}

const getSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await SalesService.getSale(id);
    res.json(sale);
  } catch (error) {
    console.error(error);
  }
}

const getPurchases = async (req, res, next) => {
  try {
    const { id } = req.params;
    const purchases = await SalesService.getPurchases(id);
    res.json(purchases);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllSales,
  getSale,
  getPurchases,
};
