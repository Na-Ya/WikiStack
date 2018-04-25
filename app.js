const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const models = require('./models');
const routes = require('./routes')
const path = require('path'); // from twitter.js

const env = nunjucks.configure('views', {noCache: true});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public'))); // from twitter.js

app.use(routes)

models.User.sync()
.then(function () {
    console.log('User table created!');
    return models.Page.sync();
})
.then(function () {
    console.log('Page table created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));


//models.db.sync({force: true})  --> this would restart the db and re-sync. 
