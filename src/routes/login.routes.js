const router = require('express').Router();
const { login } = require('../controllers/login.controller');

/**
* @swagger
* /login:
*   post:
*     summary: Log in a user
*     description: Check if user exists and if password is correct
*     tags:
*       - Login
*     responses:
*       200:
*         description: Success
*       404:
*         description: User not found
*       500:
*         description: Internal server error
*/
router.post('/', login);

module.exports = router;
