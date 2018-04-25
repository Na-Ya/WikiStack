const express = require('express');
const router = express.Router();
const models = require('../models');
const wikiRouter = require('./wiki/wiki.js');
const userRouter = require('./user/user.js');

router.get('/', function(req, res, next) {
	res.redirect('/wiki');
});
router.use('/wiki', wikiRouter);
router.use('/users', userRouter);

module.exports = router;
