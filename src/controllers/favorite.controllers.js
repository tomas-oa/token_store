const FavoritesService = require ( '../services/favorite.service' );

const getUserFavorites = async (req, res, next) => {
  try {
    const { id } = req.params;
    const favorites = await FavoritesService.getUserFavorites(id);

    if (favorites.length > 0) {
      res.json(favorites);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
  }
};

const addUserFavorite = async (req, res, next) => {
  try {
    const { user_id, token_id } = req.body;
    const favorite = await FavoritesService.addUserFavorite( user_id, token_id );

    if (favorite.length > 0) {
      res.status(201).json(favorite);
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteUserFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const favorite = await FavoritesService.deleteUserFavorite(id);

    if (favorite.length > 0) {
      res.status(200).json(favorite);
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUserFavorites,
  addUserFavorite,
  deleteUserFavorite,
};
