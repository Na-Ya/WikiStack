const express = require('express');
const router = express.Router();
const models = require('../models');
const wiki = require('./wiki/wiki.js')
const users = require('./user/user.js')

router.get('/wiki/add', (req, res, next)=>{

})

router.use('/wiki', wiki);



module.exports = router;