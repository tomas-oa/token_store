const pool = require('../db');

const getUserFavoritesDB = async (id) => {
  const { rows: favorites } = await pool.query(
    'SELECT  f.id, t.id as token_id, f.user_id, t.name, t.url, t.price, t.onsale FROM tokens t JOIN favorites f ON t.id = f.token_id WHERE user_id = $1',
    [id],
  );

  return favorites;
};

const addUserFavoriteDB = async ( userId, tokenId ) => {
  const { rows: favorite } = await pool.query(
    'INSERT INTO favorites (user_id, token_id) VALUES ($1, $2) RETURNING *',
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
