const postService = require('../services/post');

async function getAll(_req, res) {
    const { code, data, message } = await postService.getAll();

    if (data) {
        return res.status(code).json(message);
    }

    return res.status(code).json(message);
}

async function getOneById(req, res) {
    const { id } = req.params;
    const { message, code, data } = await postService.getOneById(id);
    
    if (!data) {
        return res.status(code).json({ message });
    }

    return res.status(code).json(data);
  }

module.exports = {
    getAll,
    getOneById,
};