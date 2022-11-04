const PurchasesService = require('../services/purchases.service');

const getPurchases = async (req, res, next) => {
  try {
    const { id } = req.params;
    const purchases = await PurchasesService.getPurchases(id);
    res.json(purchases);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPurchases,
};