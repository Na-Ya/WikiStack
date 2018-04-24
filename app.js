const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const models = require('./models');
const routes = require('./routes')

const env = nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

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

// app.use(express.static(path.join(__dirname, '/views')))

//models.db.sync({force: true})  --> this would restart the db and re-sync. 
