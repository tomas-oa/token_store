const router = require('express').Router();
const {
  getUserFavorites,
  addUserFavorite,
  deleteUserFavorite,
} = require('../controllers/favorite.controllers');

router.get('/:id', getUserFavorites);
router.delete('/:id', deleteUserFavorite);
router.post('/', addUserFavorite);

module.exports = router;
