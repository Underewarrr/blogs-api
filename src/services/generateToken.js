const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  const config = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const JWT = jwt.sign(payload, secret, config);
  return JWT;
};

module.exports = generateToken;