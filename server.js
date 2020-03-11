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
app.use(express.static('public'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: true, 
    }
  }));

var sess;

const redirectLogin = (req, res, next) => {
    if(!req.session.userId){
        res.redirect('/login');
    } else {
        next();
    }
};

const redirectHome = (req, res, next) => {
    if(!req.session.userId){
        res.redirect('/profile');
    } else {
        next();
    }
};

app.get('/uploadalbum', function (req, res) {
    res.render('uploadalbum');
});

app.get('/uploadtrack', function (req, res) {
    res.render('uploadtrack');
});

app.get('/profile', function (req, res) {
    sess = req.session;
    res.render('profile_page');
});

app.get('/create', function (req, res) {
    res.render('create');
});

app.get('/login', function (req, res) {
    res.render('login', {layout: null});
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.get('/login', redirectHome, function (req, res) {
    const { userId } = req.session;
    res.render('login', );
});

app.post('/create', function (req, res) {
    res.render('create');
});

app.post('/login', function (req, res) {
    res.render('login', );
});

app.post('/logout', redirectLogin, function (req, res) {
    res.render('login', );
});

app.get('/', redirectLogin, function (req, res) {
    res.render('home');
});

app.listen(3000);