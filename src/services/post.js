const { BlogPost, User, Category } = require('../models');

async function getAll() {
    const data = await BlogPost.findAll({
        include: [
            {
              model: User,
              as: 'user',
              attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
            },
        ],
    });

    return { code: 200, message: data };
}

async function getOneById(id) {
    const data = await BlogPost.findOne({
        where: { id },
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
          },
        ],
      });
    if (!data) {
      return { code: 404, message: 'Post does not exist' };
    }

    return { code: 200, data };
    }

module.exports = {
    getAll,
    getOneById,
};