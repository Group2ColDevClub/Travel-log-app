const jwt = require('jsonwebtoken');

const getToken = (req, res, next) => {
    try {
        // format of token: Authorization: Bearer <Token>
        const bearerHeader = req.headers['authorization'];
        if (!bearerHeader) {
            res.status(403).json('Unauthorized');
        }
        else {
            const [_, token] = bearerHeader.split(' ');
            req.token = token;
            next();
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const verifyToken = (req, res, next) => {
    getToken(req, res, next);
    jwt.verify(req.token, process.env.SECRET, (err, authData) => {
        if (err) {
            res.status(401).json(err);
        }
        else {
            console.log(authData);
            next();
        }
    })
}

module.exports = verifyToken;