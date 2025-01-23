const mongoose = require('mongoose');

const database = async () => {
  const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/furstore';
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 3000 });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = database;
