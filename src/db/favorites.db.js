const pool = require('../db');

/*
  obtener favoritos usuario por id - OK
  agregar favorito - OK
  eliminar favorito - OK
*/

const getUserFavoritesDB = async (id) => {
  const { rows: favorites } = await pool.query(
    'SELECT favorites.userId, tokens.name, tokens.url, tokens.price, tokens.state, tokens.owner_id FROM tokens JOIN favorites ON tokens.id = favorites.tokenId WHERE userId = $1',
    [id],
  );

  return favorites;
};

const addUserFavoriteDB = async ({ userId, tokenId }) => {
  const { rows: favorite } = await pool.query(
    'INSERT INTO favorites (userId, tokenId) VALUES ($1, $2) RETURNING *',
    [userId, tokenId],
  );

  console.log('favorite', favorite);

  return favorite;
};

const deleteUserFavoriteDB = async (id) => {
  const { rows: favorite } = await pool.query(
    'DELETE FROM favorites WHERE id = $1 RETURNING *',
    [id],
  );

  return favorite;
};

module.exports = {
  getUserFavoritesDB,
  addUserFavoriteDB,
  deleteUserFavoriteDB,
};
