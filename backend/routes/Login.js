const express = require('express');
const { createToken, createRefreshToken } = require('../utils/token');
const { getUser } = require('../controllers/UsersController');
const Errors = require('../utils/errors');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Errors.MissingParameters('username or password');
        const user = await getUser(username, password);
        if (!user) throw new Errors.UserNotFound();
        const token = createToken(user);
        if (!token) throw new Errors.NoToken();
        const refreshToken = createRefreshToken(user);
        if (!refreshToken) throw new Errors.NoRefreshToken();
        res.json({ token, refreshToken });
    } catch (err) {
        console.log(err.message);
        res.status(err.status || 500).json({ msg: err.message });
    }
});

module.exports = router;