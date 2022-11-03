const FavoritesService = require ( '../services/favorite.service' );

const getUserFavorites = async (req, res, next) => {
  try {
    const { id } = req.params;
    const favorites = await FavoritesService.getUserFavorites(id);
    res.json(favorites);
  } catch (error) {
    console.error(error);
  }
};

const addUserFavorite = async (req, res, next) => {
  try {
    const { user_id, token_id } = req.params;
    const favorite = await FavoritesService.addUserFavorite({ user_id, token_id });
    res.json(favorite);
  } catch (error) {
    console.error(error);
  }
};

const deleteUserFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const favorite = await FavoritesService.deleteUserFavorite(id);
    res.json(favorite);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUserFavorites,
  addUserFavorite,
  deleteUserFavorite,
};
