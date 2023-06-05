const cors = require('./Cors');
const getTripSearch = require('./getTripSearch')
const { verifyToken, getToken, createToken } = require('../utils/token');

module.exports = {
    cors, 
    verifyToken, 
    getToken,
    getTripSearch
}