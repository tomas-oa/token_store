const router = require("express").Router();
const {
  getAllSales,
  getSale,
  getPurchases,
} = require("../controllers/sales.controller");

router.get("/", getAllSales);
router.get("/:id", getSale);
router.get("/:id/purchases", getPurchases);

module.exports = router;
