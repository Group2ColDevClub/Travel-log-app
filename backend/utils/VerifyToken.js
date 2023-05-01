const jwt = require('jsonwebtoken');

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

const verifyToken = (token) => {
    try {
        const parsedToken = jwt.verify(token, process.env.SECRET);
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

module.exports = {
    getToken,
    verifyToken
};