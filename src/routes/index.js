const router = require('express').Router();
const users = require('./users.routes');
const tokens = require('./tokens.routes');
const history = require('./history.routes');
const favorite = require('./favorite.routes');
const sales = require('./sales.routes');
const purchases = require('./purchases.routes');

router.use('/users', users);
router.use('/tokens', tokens);
router.use('/history', history);
router.use('/favorites', favorite);
router.use('/sales', sales);
router.use('/purchases', purchases);

module.exports = router;