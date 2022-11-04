const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require('../controllers/users.controllers');

/**
* @swagger
* /users:
*   get:
*     summary: Get all users
*     description: Id, name, email and password of all users
*     tags:
*       - Users
*     responses:
*       200:
*         description: Success
*       500:
*         description: Internal server error
*/
router.get('/', getAllUsers);

/** 
* @swagger
* /users/{id}:
*   get:
*     summary: Get user info by id
*     description: Id, name, email and password of a user
*     tags:
*       - Users
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
router.get('/:id', getUser);

/**
* @swagger
* /users:
*   post:
*     summary: Create a new user
*     description: Add new user by providing name, email and password.
*     tags:
*       - Users
*     responses:
*       201:
*         description: User created
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                   description: Name of the user
*                 email:
*                   type: string
*                   description: Email of the user
*                 password:
*                   type: string
*                   description: Password of the user
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
*/
router.post('/', createUser);

/**
* @swagger
* /users/{id}:
*   put:
*     summary: Update user info
*     description: Update user info by providing name, email or password.
*     tags:
*       - Users
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Id of the user
*         schema:
*           type: integer
*     responses:
*       200:
*         description: User updated
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                   description: Name of the user
*                 email:
*                   type: string
*                   description: Email of the user
*                 password:
*                   type: string
*                   description: Password of the user
*       404:
*         description: User not found 
*/
router.put('/:id', updateUser);

/**
* @swagger
* /users/{id}:
*   delete:
*     summary: Delete user
*     description: Delete user by providing id.
*     tags:
*       - Users
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Id of the user
*         schema:
*           type: integer
*     responses:
*       200:
*         description: User deleted
*       404:
*         description: User not found
*/
router.delete('/:id', deleteUser);

module.exports = router;
