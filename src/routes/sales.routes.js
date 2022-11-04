const router = require('express').Router();
const {
  getAllSales,
  getSale,
  createSale,
} = require('../controllers/sales.controller');

router.get('/', getAllSales);
router.get('/:id', getSale);
router.post('/', createSale);

module.exports = router;
