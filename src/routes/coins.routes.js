const router = require('express').Router();
const {
  getUserCoins,
  getAllCoins,
} = require('../controllers/coins.controller');

/**
* @swagger
* /coins/{id}:
*  get:
*   summary: Get user coins
*  description: Get all coins of a user
*  tags:
*    - Coins
*  parameters:
*    - in: path
*      name: id
*      required: true
*      description: Id of the user
*      schema:
*        type: integer
*  responses:
*    200:
*      description: Success
*    404:
*      description: User not found
*    500:
*      description: Internal server error
*/
router.get('/:id', getUserCoins);

/**
* @swagger
* /coins:
*   get:
*     summary: Get all coins
*     description: Get all coins of all users
*     tags:
*       - Coins
*     responses:
*       200:
*         description: Success
*       404:
*         description: No coins found
*       500:
*         description: Internal server error
*/
router.get('/', getAllCoins);

module.exports = router;
