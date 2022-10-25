const pool = require("../db");

/*
  obtener favoritos usuario por id - OK
  agregar favorito - OK
  eliminar favorito - OK
*/

const getUserFavoritesDB = async (id) => {
  const { rows: favorites } = await pool.query(
    "SELECT * FROM favorites WHERE user_id = $1",
    [id]
  );

  return favorites;
}

const addUserFavoriteDB = async ({ user_id, token_id }) => {
  const { rows: favorite } = await pool.query(
    "INSERT INTO favorites (user_id, token_id) VALUES ($1, $2) RETURNING *",
    [user_id, token_id]
  );

  return favorite;
}

const deleteUserFavoriteDB = async (id) => {
  const { rows: favorite } = await pool.query(
    "DELETE FROM favorites WHERE id = $1 RETURNING *",
    [id]
  );

  return favorite;
}

module.exports = {
  getUserFavoritesDB,
  addUserFavoriteDB,
  deleteUserFavoriteDB,
}