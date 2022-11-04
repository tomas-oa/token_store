const router = require('express').Router();
const {
  getAllTokens,
  updateTokenPrice,
  getToken,
} = require('../controllers/tokens.controllers');
/** 
* @swagger
* /tokens:
*   get:
*     summary: Get all tokens
*     description: Id, name, image url, price, state and owner of all tokens
*     tags:
*       - Tokens
*     responses:
*       200:
*         description: Success
*       500:
*         description: Internal server error
*/
router.get('/', getAllTokens);

/**
* @swagger
* /tokens/{id}:
*   get:
*     summary: Get token info by id
*     description: Id, name, image url, price, state and owner of a token
*     tags:
*       - Tokens
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Id of the token
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Success
*       404:
*         description: Token not found
*       500:
*         description: Internal server error
*/
router.get('/:id', getToken);

/**
* @swagger
* /tokens/{id}:
*   put:
*     summary: Update token price
*     description: Update token price by providing the new price
*     tags:
*       - Tokens
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Id of the token
*         schema:
*           type: integer
*       - in: body
*         name: price
*         description: New price of the token
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Success
*       404:
*         description: Token not found
*       500:
*         description: Internal server error
*/
router.put('/:id', updateTokenPrice);

module.exports = router;
