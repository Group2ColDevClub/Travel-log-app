const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Users = require('../models/UsersModel');
const Errors = require('../utils/errors');
const { refreshTokens } = require('../utils/tokens');
const bcrypt = require('bcrypt');

const getUserFromDB = async (username, password) => {
    try {
        const user = await Users.findOne({ username: username });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Errors.InvalidPassword();
        return {
            id: user._id,
            username: user.username
        };
    } catch (err) {
        console.log(err.message);
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
        const token = jwt.sign(user, secret, { expiresIn: '1m' });
        const refreshToken = jwt.sign(user, refreshSecret);
        refreshTokens.push(refreshToken);
        res.json({ token, refreshToken });
    } catch (err) {
        console.log(err.message);
        res.status(err.status || 500).json({ msg: err.message });
    }
});

module.exports = router;