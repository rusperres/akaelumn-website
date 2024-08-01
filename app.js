const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const storyRouter = require('./Routes/storyRoutes');
const pageRouter = require('./Routes/pageRoutes');



const app = express();


app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));

}

app.use(express.static('public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use('/api/v1/stories', storyRouter);
app.use('', pageRouter);

module.exports = app;