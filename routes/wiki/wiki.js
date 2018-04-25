const express = require('express');
const wikiRouter = express.Router();
const models = require('../../models');
// const nunjucks = require('nunjucks');
const Page = models.Page;
const User = models.User;

wikiRouter.get('/add', function(req, res, next) {
	res.render('addpage');
});

wikiRouter.post('/', (req, res, next) => {
	const currentPage = Page.build({
		title: req.body.title,
		content: req.body.pagecontent,
		status: req.body.pagestatus,
		urlTitle: req.body.title,
		date: new Date().toString()
	});
	currentPage
		.save()
		.then(function(page) {
			res.redirect(page.urlTitle);
		})
		.catch(next);
});

// this is incomplete, we began adding the user stuff.
// User.findOrCreate({
// 	where: {
// 		name: req.body.authorname,
// 		email: req.body.authoremail
// 	}
// })
// .then(function(user){

// })

wikiRouter.get('/:urlTitle', function(req, res, next) {
	let url = req.params.urlTitle;
	//findOne is the way we lookup a row(an instance) in a table(a model)
	Page.findOne({
		// This is sequalize talk for queries. We are look in our db for where urlTile === url
		where: {
			urlTitle: url
		}
	})
		.then(function(foundPage) {
			res.render('wikipage', {
				page: foundPage
			});
		})
		.catch(next);
});

wikiRouter.get('/', function(req, res, next) {
	Page.findAll().then(function(allpages) {
		res.render('index', {
			pages: allpages
		});
	});
});

module.exports = wikiRouter;
