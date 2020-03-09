const express = require('express');
var exphbs  = require('express-handlebars');
var session = require('express-session')

const app = express();
var port = process.env.PORT || 3000;

var userData = require('./userData.json');

const userMap = {};
userData.forEach(user => {
    userMap[user.uuid] = user;
});

const refreshUserMap = () => {
    userMap = {};
    var user = fs.readFileSync(require.resolve('./userData.json'));
    userData.forEach(user => {
        userMap[user.uuid] = user;
    });
};

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/uploadalbum', function (req, res) {
    res.render('uploadalbum');
});

app.get('/uploadtrack', function (req, res) {
    res.render('uploadtrack');
});

app.get('/profile', function (req, res) {
    res.render('profile_page');
});

app.get('/create', function (req, res) {
    res.render('create');
});
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);