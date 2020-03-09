const express = require('express');
var exphbs  = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/profile', function (req, res) {
    res.render('profile_page');
});

app.get('/create', function (req, res) {
    res.render('create');
});

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);