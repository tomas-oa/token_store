const router = require('express').Router();
const {
  getPurchases,
} = require('../controllers/purchases.controller');

/**
* @swagger
* /purchases:
*  get:
*    summary: Get all purchases
*    description: Get user purchases
*    tags:
*      - Sales
*    responses:
*      200:
*        description: Success
*      500:
*        description: Internal server error
*/
router.get('/:id', getPurchases);

module.exports = router;
