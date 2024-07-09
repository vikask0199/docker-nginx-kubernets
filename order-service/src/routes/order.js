const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
    // const orders = await Order.find();
    // res.json(orders);
    res.json("I am from  order service")
});

module.exports = router;
