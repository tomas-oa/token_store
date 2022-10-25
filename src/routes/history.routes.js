const router = require("express").Router();
const {
  getHistory,
} = require("../controllers/tokens.controllers");

router.get("/", getHistory);

module.exports = router;
