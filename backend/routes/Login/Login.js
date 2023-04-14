const express = require('express');
const jwt = require('jsonwebtoken');

const getUserFromDB = (userName, password) => {
    let user = null;
    if (userName && password){
        user = {
            username: 'John Doe',
            email: 'Johnd@abc.com',
            password: 'JDoe1231'
        }
    }
    delete user?.password;
    return user;
}

const router = express.Router();

router.post('/login', (req, res, next) => {
    try {
        const {userName, password} = req.body;
        // todo: add get user by data userName and password
        const user = getUserFromDB(userName, password);
        // const user = null;
        if (!user) {
            throw new Error("User not fount");
        }
        // todo: move secrete to .env 
        const secret = process.env.SECRET;
        const token = jwt.sign(user, secret, {expiresIn: '1h'});
        res.json({ token });
    } catch (error) {
        res.status(403).json(error.message)
    }
});

module.exports = router;