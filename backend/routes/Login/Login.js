const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const getUserFromDB = (userName, password) => {
    // todo: add get user by data userName and password
    let user = null;
    if (userName === 'John Doe' && password) {
        user = {
            username: 'John Doe',
            email: 'Johnd@abc.com',
            password: 'JDoe1231'
        }
    }

    return {
        userName: user.username,
        password: user.password
    };
}

router.post('/login', (req, res, next) => {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) throw new Error("No username or password");
        const user = getUserFromDB(userName, password);
        if (!user) throw new Error("User not fount");
        const secret = process.env.SECRET;
        const token = jwt.sign(user, secret, { expiresIn: '10m' });
        res.json({ token });
    } catch (err) {
        res.status(404).json({ msg: err.message, error: err }).send();
    }
});

module.exports = router;