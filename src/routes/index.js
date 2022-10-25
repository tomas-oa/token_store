const router = require("express").Router();
const users = require("./users.routes");
const tokens = require("./tokens.routes");
const history = require("./history.routes");
const favorite = require("./favorite.routes");

router.use("/users", users);
router.use("/tokens", tokens);
router.use("/history", history);
router.use("/favorite", favorite);

module.exports = router;