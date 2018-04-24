const express = require('express');
const wikiRouter = express.Router();
const models = require('../../models');


wikiRouter.get('/', (req, res, next)=>{
    // res.render('index');
})

wikiRouter.get('/add', (req, res, next)=>{
    res.render('addpage');
})

wikiRouter.post('/', (req, res ,next)=>{

})

module.exports = wikiRouter;
