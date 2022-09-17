const router = require("express").Router();
const users = require("./users.routes");
const tokens = require("./tokens.routes");

router.use("/users", users);
router.use("/tokens", tokens);

module.exports = router;