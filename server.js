const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const bookRouter = require('./api/routes/book-router');
const feedbackRouter = require('./api/routes/feedback-router');

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static(path.join(__dirname, 'files')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/api', clubRouter);


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`)
    }
});

