const mongoose = require('mongoose');
require('dotenv').config();

const database = async () => {
  const DB_URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(DB_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
  }
};

module.exports = database;