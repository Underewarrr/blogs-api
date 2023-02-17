const userService = require('../services/user');

async function login(req, res) {
    const { user } = req;
    const { token, message, code } = await userService.login(req.body);

    if (!user) {
        return res.status(code).json({ message, token });
    }
    
    // return res.status(code).json({ message });
}

async function create(req, res) {
    const { token, message, code, data } = await userService.create(req.body);

    if (!data) {
        return res.status(code).json({ token, message });
    }

    return res.status(code).json({ message });
}

async function getAll(_req, res) {
    const { code, data } = await userService.getAll();

    return res.status(code).json(data);
}

async function getOneById(req, res) {
    const { id } = req.params;
    const { message, code, data } = await userService.getOneById(id);
    
    if (!data) {
        return res.status(code).json({ message });
    }

    return res.status(code).json(data);
  }

module.exports = {
    login,
    create,
    getAll,
    getOneById,
};