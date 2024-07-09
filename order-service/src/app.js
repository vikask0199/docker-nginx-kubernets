const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/order');

const app = express();
const MONGO_URI = 'mongodb://ms:mstest@192.168.29.104:27017/?authSource=ms_testing';

mongoose.connect(MONGO_URI, {  })
    .then(() => console.log('Order Service: Connected to MongoDB'))
    .catch(err => console.error('Order Service: MongoDB connection error:', err));

app.use('/orders', orderRoutes);

module.exports = app;
