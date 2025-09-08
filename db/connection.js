const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Missing MONGODB_URI in .env');

    await mongoose.connect(uri); // Mongoose 8 doesn’t need extra options
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;