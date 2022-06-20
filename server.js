const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const placeRouter = require('./api/routes/place-routes');

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static(path.join(__dirname, '/files')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/api', placeRouter);

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname + '/files/landingpage.html'));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`)
    }
});

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
        res.sendFile(path.join(__dirname + '/files/exploreBar.html'));
    } else
        res.sendFile('/files/login.html',{root:__dirname})
});

app.post('/user',(req,res) => {
    if(req.body.username === username && req.body.password === password){
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)
        res.sendFile(path.join(__dirname + '/files/exploreBar.html'));
    }
    else {
        res.send('Invalid username or password');
    }
})

