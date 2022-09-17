const router = require("express").Router();
const {
  getAllTokens,
  updatePrice,
} = require("../controllers/tokens.controllers");

router.get("/", getAllTokens);
router.post("/:id", updatePrice);

module.exports = router;
