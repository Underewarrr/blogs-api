const { User } = require('../models');
const generateToken = require('./generateToken');
// const createValidation = require('../middlewares/validation/create');

async function login(userBody) {
    const { email, password } = userBody;

    if (!email || !password) {
        return { code: 400, message: 'Some required fields are missing' };
    }

    const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) {
        return { code: 400, message: 'Invalid fields' };
    }

    const token = generateToken({
      data: {
        userId: user.id,
      }, 
    });

    return { code: 200, token };
  }

async function create(newUserBody) {
    const emailCheck = await User.findOne({ where: { email: newUserBody.email } });
  
    if (emailCheck) return { code: 409, message: 'User already registered' };

    const user = await User.create({ ...newUserBody });

    const token = generateToken({
      data: {
        userId: user.id,
      }, 
    });

    return { code: 201, token };
  }

  async function getAll() {
    const data = await User.findAll({
      attributes: { exclude: ['password'] },
    });
  
    return { code: 200, data };
  }
  
  async function getOneById(id) {
    const data = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!data) {
      return { code: 404, message: 'User does not exist' };
    }

    return { code: 200, data };
    }

/* 
async function create(newUserBody) {
  const { displayName, password } = newUserBody;
  
  const checkEmail = await User.findOne({ where: { email: newUserBody.email } });

  if (checkEmail) return { code: 400, message: 'error' };

  if (displayName.length <= 8) {
    return { code: 400, message: '"displayName" length must be at least 8 characters long' };
  }
  
  if (password.length <= 5) {
    return { code: 400, message: '"password" length must be at least 6 characters long' };
  }
  const user = await User.create({ ...newUserBody });

    const token = generateToken({
      data: {
        userId: user.id,
      }, 
    });

    return { code: 200, user, token };
} */

  module.exports = {
    login,
    create,
    getAll,
    getOneById,
  };