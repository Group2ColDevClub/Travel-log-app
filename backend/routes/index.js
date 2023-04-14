const express = require('express');
const authentication = require('./Login/Login');

module.exports = (app) => {
    app.use(express.json());
    app.use('/', authentication);
}
