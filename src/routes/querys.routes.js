const router = require('express').Router();
const {
  getMostFavoriteToken,
  getUserWithMostCoins,
  getMostSoldToken,
  getUserWithMostTokens,
} = require('../controllers/querys.controller');

router.get('/most-favorite-token', getMostFavoriteToken);
router.get('/user-with-most-coins', getUserWithMostCoins);
router.get('/most-sold-token', getMostSoldToken);
router.get('/user-with-most-tokens', getUserWithMostTokens);

module.exports = router;
