const router = require('express').Router();
const {
  getUserCoins,
  getAllCoins,
} = require('../controllers/coins.controller');

// get coins of a user
/**
* @swagger
* /coins/{id}:
*  get:
*   summary: Get coins of a user
*   description: Get coins of a user
*   parameters:
*   - in: path
*     name: id
*     schema:
*       type: integer
*     required: true
*     description: Numeric ID of the user to get coins
*   tags:
*     - Coins
*   responses:
*    200:
*      description: Success
*    404:
*     description: User not found
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
