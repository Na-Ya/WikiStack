const express = require('express');
const router = express.Router();
const models = require('../models');
const wikiRouter = require('./wiki/wiki.js')
const userRouter = require('./user/user.js')



router.use('/wiki', wikiRouter);


module.exports = router;