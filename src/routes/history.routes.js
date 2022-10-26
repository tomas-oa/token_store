const router = require('express').Router();
const {
  getHistory,
} = require('../controllers/history.controllers');

router.get('/', getHistory);

module.exports = router;
