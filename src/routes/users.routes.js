const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

module.exports = router;
