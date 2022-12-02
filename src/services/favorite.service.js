/* eslint-disable class-methods-use-this */
const {
  getUserFavoritesDB,
  addUserFavoriteDB,
  deleteUserFavoriteDB,
} = require('../db/favorites.db');

class FavoritesService {
  getUserFavorites = async (id) => {
    let favorites;

    try {
      favorites = await getUserFavoritesDB(id);
    } catch (error) {
      console.error(error);
    }

    return favorites;
  };

  addUserFavorite = async (userId, tokenId) => {
    let favorite;

    try {
      favorite = await addUserFavoriteDB(userId, tokenId);
    } catch (error) {
      console.error(error);
    }

    return favorite;
  };

  deleteUserFavorite = async (id) => {
    let favorite;

    try {
      favorite = await deleteUserFavoriteDB(id);
    } catch (error) {
      console.error(error);
    }

    return favorite;
  };
}

module.exports = new FavoritesService();
