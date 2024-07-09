const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
const MONGO_URI = 'mongodb://ms:mstest@192.168.29.104:27017/?authSource=ms_testing';

mongoose.connect(MONGO_URI, {  })
    .then(() => console.log('User Service: Connected to MongoDB'))
    .catch(err => console.error('User Service: MongoDB connection error:', err));

app.use('/users', userRoutes);

module.exports = app;
