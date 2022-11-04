const router = require('express').Router();
const {
  getPurchases,
} = require('../controllers/purchases.controller');

router.get('/:id', getPurchases);

module.exports = router;
