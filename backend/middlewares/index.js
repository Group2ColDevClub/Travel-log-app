const cors = require('./Cors');
const { verifyToken, getToken } = require('../utils/VerifyToken');

module.exports = {
    cors, 
    verifyToken, 
    getToken
}