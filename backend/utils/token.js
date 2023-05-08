const jwt = require('jsonwebtoken');

let refreshTokens = [];

const getToken = (req) => {
    try {
        const bearerHeader = req.headers['authorization'];
        if (!bearerHeader) throw new Error('Missing access token');
        const [_, token] = bearerHeader.split(' ');
        return token
    } catch (err) {
        console.log(err.message);
    }
}

const verifyToken = (token, secret) => {
    try {
        const parsedToken = jwt.verify(token, secret);
        return parsedToken;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const createToken = (data) => {
    try {
        const secret = process.env.SECRET;
        const token = jwt.sign(data, secret, { expiresIn: '1m' });
        return token ;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}

const createRefreshToken = (data) => {
    try {
        const refreshSecret = process.env.REFRESH_SECRET;
        const refreshToken = jwt.sign(data, refreshSecret);
        refreshTokens.push(refreshToken);
        return refreshToken
    } catch (err) {
        console.log(err.message);
        return null;
    }
}

module.exports = {
    refreshTokens,
    getToken,
    verifyToken,
    createToken,
    createRefreshToken,
};