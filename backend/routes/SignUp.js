const express = require('express');
const router = express.Router();
const Errors = require('../utils/errors');
const UsersModel = require('../models/UsersModel');

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
        res.status(201).json({ msg: "success" });
    } catch (err) {
        if (err.message.includes("duplicate key error collection")) {
            res.status(409).json({ msg: "username already exists" });
        } else {
            res.status(err.status || 500).json({ msg: err.message });
        }
    }
});

module.exports = router;