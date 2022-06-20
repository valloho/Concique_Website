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

