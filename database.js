const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/hotel';

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database connected');
});

db.on('disconnected', () => {
    console.log('Database disconnected');
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

module.exports = { db };
