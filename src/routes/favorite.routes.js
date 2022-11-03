const router = require('express').Router();
const {
  getUserFavorites,
  addUserFavorite,
  deleteUserFavorite,
} = require('../controllers/favorite.controllers');

router.get('/:id', getUserFavorites);
router.delete('/:id', deleteUserFavorite);
router.post('/:token_id/user/:user_id', addUserFavorite);

module.exports = router;
