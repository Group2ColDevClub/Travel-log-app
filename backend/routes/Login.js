const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Users = require('../models/UsersModel');

const getUserFromDB = async (username, password) => {
    try {
        const user = await Users.findOne({ username: username, password: password });
        return {
            username: user.username
        };
    } catch (err) {
        console.log('Could not find user');
    }
    return null;
}

router.post('/', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Error("No username or password");
        const user = await getUserFromDB(username, password);
        if (!user) throw new Error("User not fount");
        const secret = process.env.SECRET;
        const token = jwt.sign(user, secret, { expiresIn: '10m' });
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: err.message, error: err }).send();
    }
});

module.exports = router;