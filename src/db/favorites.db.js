const pool = require('../db');

const getUserFavoritesDB = async (id) => {
  const { rows: favorites } = await pool.query(
    'SELECT f.userId, t.name, t.url, t.price, t.state, t.owner_id FROM tokens t JOIN favorites f ON t.id = f.tokenId WHERE userId = $1',
    [id],
  );

  return favorites;
};

const addUserFavoriteDB = async ({ userId, tokenId }) => {
  const { rows: favorite } = await pool.query(
    'INSERT INTO favorites (userId, tokenId) VALUES ($1, $2) RETURNING *',
    [userId, tokenId],
  );

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
