const router = require('express').Router();
const {
  getAllTokens,
  updatePrice,
  getToken,
} = require('../controllers/tokens.controllers');

router.get('/', getAllTokens);
router.post('/:id', updatePrice);
router.get('/:id', getToken);

module.exports = router;
