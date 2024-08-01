const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose')
const dotenv = require('dotenv');


dotenv.config({ path: './config.env' });

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then(() => {
    console.log('DB connection successful')
}).catch((error) => {
    console.log('An error occured')
});



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


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server has started');
});