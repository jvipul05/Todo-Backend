const mongoose = require('mongoose');

// Connect to MongoDB
require('dotenv').config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB', err);
      process.exit(1);
    });
}

module.exports = dbConnect;