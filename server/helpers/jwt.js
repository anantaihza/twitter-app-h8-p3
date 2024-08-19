const jwt = require('jsonwebtoken');

const signToken = (data) => jwt.sign(data, process.env.SECRET);

const verifyToken = (token) => jwt.verify(token, process.env.SECRET);

module.exports = { signToken, verifyToken };
