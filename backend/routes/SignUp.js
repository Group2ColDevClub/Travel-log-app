const express = require('express');
const router = express.Router();
const Errors = require('../utils/errors');
const UsersModel = require('../models/UsersModel');
const { createToken, createRefreshToken } = require('../utils/token');

router.post('/', async (req, res, next) => {
    try {
        const { firstName, lastName, username, password, email } = req.body;
        if (!username) throw new Errors.MissingParameters("username");
        if (!password) throw new Errors.MissingParameters("password");
        if (!email) throw new Errors.MissingParameters("email");
        if (!firstName) throw new Errors.MissingParameters("firstName");
        if (!lastName) throw new Errors.MissingParameters("lastName");
        const newUser = new UsersModel({
            username: username,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName
        });
        const savedUser = await newUser.save();
        if (!savedUser) throw new Errors.FailedToCreateADocument();
        const userData = {
            _id: savedUser._id,
            username: savedUser.username
        }
        const token = createToken(userData);
        if (!token) throw Errors.NoToken();
        const refreshToken = createRefreshToken(userData);
        if (!refreshToken) throw Errors.NoRefreshToken();
        res.status(201).json({ msg: "success", token: token, refreshToken: refreshToken });
    } catch (err) {
        if (err.message.includes("duplicate key error collection")) {
            res.status(409).json({ msg: "username already exists" });
        } else {
            res.status(err.status || 500).json({ msg: err.message });
        }
    }
});

module.exports = router;