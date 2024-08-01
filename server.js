const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then(() => {
    console.log('DB connection successful')
}).catch((error) => {
    console.log('An error occured')

});







const port = process.env.port || 8000;
app.listen(port, () => {
    console.log('Server has started');
});