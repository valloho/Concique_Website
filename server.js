const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const placeRouter = require('./api/routes/club-routes');

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static(path.join(__dirname, '/files')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/api', placeRouter);

/*Session Management*/

const cookieParser = require("cookie-parser");
const sessions = require('express-session');

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecretkey",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

//username and password
let username = 'admin'
let password = 'mypassword'

// a variable to save a session
let session;

app.get('/',(req,res) => {
    session = req.session;
    if(session.userid){ //user is already logged in
        res.sendFile(path.join(__dirname + '/files/landingpage.html'));
    } else
        res.sendFile(path.join(__dirname + '/files/login.html'))
});

app.post('/user',(req,res) => {
    if(req.body.username === username && req.body.password === password){
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)
        res.sendFile(path.join(__dirname + '/files/landingpage.html'));
    }
    else {
        res.send('Invalid username or password');
    }
})

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`)
    }
});
/*
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
 */