const { Category } = require('../models');

async function create(body) {
    const { name } = body;

    if (!name) {
        return { code: 400, message: '"name" is required' };
    }

    const category = await Category.create({ ...body });

    return { code: 201, category };
}

async function getAll() {
    const data = await Category.findAll();
  
    return { code: 200, data };
  }

module.exports = {
    create,
    getAll,
};