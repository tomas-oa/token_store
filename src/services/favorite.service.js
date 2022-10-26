const {
  getUserFavoritesDB,
  addUserFavoriteDB,
  deleteUserFavoriteDB,
} = require('../db/favorites.db');
class FavoritesService {
  getUserFavorites = async (id) => {
    try {
      return await getUserFavoritesDB(id);
    } catch (error) {
      console.error(error);
    }
  };

  addUserFavorite = async ({ user_id, token_id }) => {
    try {
      return await addUserFavoriteDB({ user_id, token_id });
    } catch (error) {
      console.error(error);
    }
  };

  deleteUserFavorite = async (id) => {
    try {
      return await deleteUserFavoriteDB(id);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new FavoritesService();
