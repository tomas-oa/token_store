const router = require('express').Router();
const {
  getUserFavorites,
  addUserFavorite,
  deleteUserFavorite,
} = require('../controllers/favorite.controllers');

/**
* @swagger
* /favorites/{id}:
*   get:
*     summary: Get user favorites
*     description: Get all favorites of a user
*     tags:
*       - Favorites
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Id of the user
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Success
*       404:
*         description: User not found
*       500:
*         description: Internal server error
*/
router.get('/:id', getUserFavorites);

/**
* @swagger
* /favorites:
*   post:
*     summary: Add a new favorite
*     description: Add new favorite by providing user id and token id.
*     tags:
*       - Favorites
*     parameters:
*       - in: body
*         name: body
*         description: User id and token id
*         schema:
*           type: object
*           properties:
*             user_id:
*               type: integer
*             token_id:
*               type: integer
*     responses:
*       201:
*         description: Created
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
*/
router.post('/', addUserFavorite);

/**
* @swagger
* /favorites/{id}:
*   delete:
*     summary: Delete a favorite
*     description: Delete a favorite by providing user id and token id.
*     tags:
*       - Favorites
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Id of the favorite
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Success
*       404:
*         description: Favorite not found
*       500:
*         description: Internal server error
*/
router.delete('/:id', deleteUserFavorite);

module.exports = router;
