const router = require('express').Router();
const {
  getHistory,
} = require('../controllers/history.controllers');
/**
* @swagger
* /history:
*  get:
*    summary: Get history
*    description: Get token history
*    tags:
*      - History
*    responses:
*      200:
*        description: Success
*      500:
*        description: Internal server error
*/
router.get('/', getHistory);

module.exports = router;
