var express = require('express');
var app = express();

const dbConnect = require('./config/users');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();
const port = process.env.PORT || 3000;


//import routes
const todoRoutes = require('./routes/todor');

//mount routes
app.use('/api/v1', todoRoutes);

app.listen(port, function() {
    console.log('Server is running on port 3000');
  });

dbConnect();
app.get('/', function(req, res) {
    res.send('Hello World');
  });