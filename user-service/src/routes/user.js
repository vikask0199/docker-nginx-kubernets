const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
    // res.json("I am from user-service")
});

module.exports = router;
