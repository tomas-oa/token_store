const SalesService = require('../services/sales.service');

const getAllSales = async (req, res) => {
  try {
    const sales = await SalesService.getAllSales();
    res.json(sales);
  } catch (error) {
    console.error(error);
  }
};

const getSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await SalesService.getSale(id);

    if (sale.length === 0) {
      res.status(404).json({ message: 'Sale not found' });
    }

    res.json(sale);
  } catch (error) {
    console.error(error);
  }
};

const createSale = async (req, res) => {
  try {
    const {
      tokenId, sellerId, buyerId, price,
    } = req.body;

    const sale = await SalesService.createSale(tokenId, sellerId, buyerId, price);

    if (sale.length === 0) {
      res.status(400).json({ message: 'Bad request' });
    }

    res.status(201).json(sale);
  } catch (error) {
    console.error(error);
  }
};

const onSale = async (req, res) => {
  try {
    const { tokenId } = req.params;
    const sale = await SalesService.onSale(tokenId);

    if (sale.length === 0) {
      res.status(404).json({ message: 'Sale not found' });
    }

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
