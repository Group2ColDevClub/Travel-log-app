const express = require('express');
const router = express.Router();
const Errors = require('../utils/errors');
let { refreshTokens } = require('../utils/token');

router.post('/', (req, res, next) => {
    try {
        const { token } = req.body;
        if (!token) throw new Errors.NoToken();
        refreshTokens = refreshTokens.filter(t => t !== token);
        res.status(200).json({ msg: "logged out", loggedOut: true })
    } catch (err) {
        console.log(err.message);
        res.status(err.status || 500).json({ msg: err.message, loggedOut: true })
    }
});

module.exports = router;