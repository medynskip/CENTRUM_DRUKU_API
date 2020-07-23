require('dotenv').config();
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({
        msg: 'No token, auth failed'
    });

    try {
        const decoded = jwt.verify(token, process.env.JWT_secret);

        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({
            msg: 'Invalid token, auth failed'
        })
    }
}

module.exports = auth;