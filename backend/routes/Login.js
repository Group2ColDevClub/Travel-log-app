const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Users = require('../models/UsersModel');
const Errors = require('../utils/errors');
const { refreshTokens } = require('../utils/tokens');
const bcrypt = require('bcrypt');

const getUserFromDB = async (userName, password) => {
    try {
        const user = await Users.findOne({ userName: userName });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Errors.InvalidPassword();
        return {
            id: user._id,
            userName: user.userName
        };
    } catch (err) {
        console.log(err.message);
    }
    return null;
}

router.post('/', async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) throw new Errors.MissingParameters('userName or password');
        const user = await getUserFromDB(userName, password);
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