const express = require('express');
const wikiRouter = express.Router();
const models = require('../../models');
// const nunjucks = require('nunjucks');


wikiRouter.get('/', function(req, res, next) {
    res.send('WEIRD TEST');
  });
  
  wikiRouter.post('/', function(req, res, next) {
    res.send('response to POST request to /wiki/');
  });
  
  wikiRouter.get('/add', function(req, res, next) {
    res.render('addpage')
  });

module.exports = wikiRouter;
