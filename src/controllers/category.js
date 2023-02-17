const categoryService = require('../services/category');

async function create(req, res) {
    const { message, code, category } = await categoryService.create(req.body);
    
    if (!category) {
        return res.status(code).json({ message });
    }

    return res.status(code).json(category);
}

async function getAll(_req, res) {
    const { code, data } = await categoryService.getAll();

    return res.status(code).json(data);
}

module.exports = {
    create,
    getAll,
};