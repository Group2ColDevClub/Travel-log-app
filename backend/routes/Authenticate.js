const express = require('express');
const { verifyToken, getToken, refreshTokens, createToken } = require('../utils/token');
const Errors = require('../utils/errors');
const router = express.Router(); ''

router.post('/', (req, res, next) => {
    try {
        const token = getToken(req);
        if (!token) throw new Errors.NoToken();
        const parsedUser = verifyToken(token, process.env.SECRET);
        if (!parsedUser) throw new Errors.JWTExpired();
        res.status(200).json({ authorized: true, msg: '' })
    } catch (err) {
        console.log(err.message);
        res.status(err.status || 500).json({ msg: err.message, authorized: false })
    }

});

router.post('/token', (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw new Errors.NoToken();
        if (!refreshTokens.includes(refreshToken)) throw new Errors.InvalidRefreshToken();
        const refreshSecret = process.env.REFRESH_SECRET;
        const parsedUser = verifyToken(refreshToken, refreshSecret);
        const token = createToken(parsedUser);
        res.status(200).json({ token })
    } catch (err) {
        console.log(err.message);
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
