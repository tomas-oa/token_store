const router = require('express').Router();
const {
  getAllTokens,
  updateTokenPrice,
  getToken,
} = require('../controllers/tokens.controllers');

router.get('/', getAllTokens);
router.put('/:id', updateTokenPrice);
router.get('/:id', getToken);

module.exports = router;
