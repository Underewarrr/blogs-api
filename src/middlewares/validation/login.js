/* const joi = require('joi');
const { User } = require('../../models');

const Useremail = joi.string().required();
const Userpassword = joi.string().min(6).required();

async function validationLogin(req, res, next) {
  const { error: email } = Useremail.validate(req.body.email);
  const { error: password } = Userpassword.validate(req.body.password);
  if (!email || !password) {
    return res.status(400).json(
      { message: 'Some required fields are missing' },
    );
  }

  const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) {
        return res.status(400).json(
            { message: 'Invalid fields' },
        );
  } 
    next();
}

module.exports = {
    validationLogin,
  }; */