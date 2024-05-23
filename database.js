const mongoose = require('mongoose');

require('dotenv').config()
//const url=process.env.DB_URLLOCAL;
const url=process.env.DB_URL;

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
