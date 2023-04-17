const express = require('express');
const login = require('./Login/Login');
const authentication = require('./Authenticate/Authenticate');

module.exports = (app) => {
    app.use(express.json());
    // app.use('/', authentication);
    app.use('/', login);
}
