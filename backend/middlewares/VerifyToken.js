const jwt = require('jsonwebtoken');

const getToken = (req, res) => {
    try {
        const bearerHeader = req.headers['authorization'];
        if (!bearerHeader) throw new Error('Missing access token');
        const [_, token] = bearerHeader.split(' ');
        req.token = token;
        return token
    } catch { }
    // } catch (error) {
    //     res.status(403).json(error.message);
    // }
}

const verifyToken = (req, res, next) => {
    try {
        const token = getToken(req);
        const parsedToken = jwt.verify(token, process.env.SECRET);
        console.log(next);
        res.json({ authorized: true, msg: '' });
        next();
    } catch (error) {
        console.log(error.message);
        res.status(403).json({ authorized: false, msg: error.message });
    }
}

module.exports = verifyToken;