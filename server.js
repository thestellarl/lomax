const express = require('express');
var exphbs  = require('express-handlebars');
var session = require('express-session')
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
var port = process.env.PORT || 3000;

var users = require('./userData.json');
var userMap = {};
const userToUuid = {};
users.forEach(user => {
    userMap[user.uuid] = user;
    userToUuid[user.username] = user.uuid;
});

const refreshUserMap = () => {
    const userMap = {};
    var users = fs.readFileSync(require.resolve('./userData.json'));
    users.forEach(user => {
        userMap[user.uuid] = user;
    });
    return userMap;
};

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(session({
    name: 'sid',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: false, 
    }
  }));

const redirectLogin = (req, res, next) => {
    if(!req.session.userId){
        res.redirect('/login');
    } else {
        next();
    }
};

const redirectHome = (req, res, next) => {
    if(req.session.userId){
        res.redirect('/profile');
    } else {
        next();
    }
};

app.get('/uploadalbum', redirectLogin, function (req, res) {
    res.render('uploadalbum');
});

app.get('/uploadtrack', redirectLogin, function (req, res) {
    res.render('uploadtrack');
});

app.get('/', (req, res, next) => {
    res.redirect('/login');
});

app.get('/profile', redirectLogin, function (req, res) {
    const { userId } = req.session;
    sess = req.session; 
    res.render('profile_page', {displayName: userMap[userId].displayName, 
                                numFollowers: userMap[userId].followers.length,
                                numFollowing: userMap[userId].following.length,
                                username: userMap[userId].username
                            });
});

app.get('/register', redirectHome, function (req, res) {
    res.render('create');
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.get('/login', redirectHome, function (req, res) {
    const { userId } = req.session;
    res.render('login', {layout: null});
});

app.post('/register', function (req, res) {
    
});

app.post('/login', function (req, res) {
    const { username, password } = req.body;
    if( username && password) {
        const userUuid = userToUuid[username];

        const user = userMap[userUuid] && userMap[userUuid].password == password ? userUuid : null;
        if(user){
            req.session.userId = userUuid;
            return res.redirect('/profile');
        }
    }
    res.redirect('/login');
});

app.post('/logout', redirectLogin, function (req, res) {
<<<<<<< HEAD
    req.session.destroy(err => {
        if(err) {
            return res.redirect('/login');
        }
        res.clearCookie('sid');
    });
=======
    
>>>>>>> lomax-story-userlogin
});

app.listen(3000);