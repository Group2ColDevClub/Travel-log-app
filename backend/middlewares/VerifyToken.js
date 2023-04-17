const jwt = require('jsonwebtoken');

const getToken = (req, res, next) => {
    try {
        // format of token: Authorization: Bearer <Token>
        const bearerHeader = req.headers['authorization'];
        // const bearerHeader = req.header('Authorization');
        if (!bearerHeader) throw new Error('Missing access token');
        // if (!bearerHeader) {
        //     res.status(403).json('Unauthorized');
        // }
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
    try {
        
        getToken(req, res, next);
        const isValid = jwt.verify(req.token, process.env.SECRET);
        console.log(isValid);
        if (!isValid) throw new Error('access token is not valid');
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({msg: error.message}).send();   
    }
        // jwt.verify(req.token, process.env.SECRET, (err, authData) => {
            //     if (err) {
    //         res.status(401).json(err).send();
    //     }
    //     else {
    //         console.log(authData);
    //         next();
    //     }
    // })
}

module.exports = verifyToken;