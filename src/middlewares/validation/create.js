const joi = require('joi');

const Username = joi.string().min(8).required();
const Useremail = joi.string().required();
const Userpassword = joi.string().min(6).required();

async function validateCreation(req, res, next) {
  const { error: wrongName } = Username.validate(req.body.displayName);
  const { error: wrongEmail } = Useremail.validate(req.body.email);
  const { error: wrongPassword } = Userpassword.validate(req.body.password);
  if (wrongName) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  if (wrongEmail || !req.body.email.includes('@')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (wrongPassword) {
    res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  } else {
    next();
  }
}

module.exports = {
    validateCreation,
  };