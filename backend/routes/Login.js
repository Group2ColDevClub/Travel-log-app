const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Users = require('../models/UsersModel');
const Errors = require('../config/errors');

const refreshTokens = [];

const getUserFromDB = async (username, password) => {
    try {
        const user = await Users.findOne({ username: username, password: password });
        return {
            id: user._id,
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
        if (!username || !password) throw new Errors.MissingParameters('username or password');
        const user = await getUserFromDB(username, password);
        if (!user) throw new Errors.UserNotFound();
        const secret = process.env.SECRET;
        const refreshSecret = process.env.REFRESH_SECRET;
        const token = jwt.sign(user, secret, { expiresIn: '10m' });
        const refreshToken = jwt.sign(user, refreshSecret, { expiresIn: '10m' });
        refreshTokens.push(refreshToken);
        res.json({ token, refreshToken });
    } catch (err) {
        console.log(err.message);
        res.status(err.status || 500).json({ msg: err.message });
    }
});


router.post('/token', (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!token) throw new Errors.NoToken();
        if (!refreshTokens.includes(token)) throw new Errors.InvalidRefreshToken();
        const secret = process.env.SECRET;
        const refreshSecret = process.env.REFRESH_SECRET;
        const parsedUser = jwt.verify(token, refreshSecret);
        const token = jwt.sign(parsedUser, secret, { expiresIn: '5m' });
        res.status(200).json({ token })
    } catch (err) {
        console.log(err);
        res.status(err.status || 500).json({ msg: err.message });
    }
});

router.post('/logout', (req, res, next) => {
    try {
        const { token } = req.body;
        if (!token) throw new Errors.NoToken();
        refreshTokens = refreshTokens.filter(token => t !== token);
        res.status(200).json({ msg: "success. the last token deleted" })
    } catch (err) {
        res.status(err.status || 500).json({ msg: err.message })
    }
});
module.exports = router;