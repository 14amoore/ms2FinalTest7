const express = require('express');
const bodyParser = require('body-parser');

const product = require('./ProductsApp/routes/product.route');

// initialize the express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://amuser:098765@cluster0-dhtes.mongodb.net/test?retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

const port = 8000;

app.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});
