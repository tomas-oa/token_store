const router = require('express').Router();
const {
  getAllSales,
  getSale,
  createSale,
} = require('../controllers/sales.controller');

/**
* @swagger
* /sales:
*   get:
*     summary: Get all sales
*     description: Token name, buyer name, seller name, price and date of a sale
*     tags:
*       - Sales
*     responses:
*       200:
*         description: Success
*       500:
*         description: Internal server error
*/
router.get('/', getAllSales);

/** 
* @swagger
* /sales/{id}:
*   get:
*     summary: Get user sales info by user id
*     description: Token name, buyer name, seller name, price and date of a sale
*     tags:
*       - Sales
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
router.get('/:id', getSale);

/**
* @swagger
* /sales:
*   post:
*     summary: Make a sale
*     description: Make a sale by providing buyer id, seller id, token id and price. Updates token owner and, buyer and seller balances.
*     tags:
*       - Sales
*     responses:
*       201:
*         description: Created
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
*/ 
router.post('/', createSale);

module.exports = router;
