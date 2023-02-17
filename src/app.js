const express = require('express');
const rescue = require('./utils/rescue');
// ...

// Middlewares
const userValidate = require('./middlewares/validation/create');
const JWTValidate = require('./middlewares/validation/jwt');
// Controllers
const userController = require('./controllers/user');
const categoryController = require('./controllers/category');
const postController = require('./controllers/post');

const app = express();

app.use(express.json());

// ...
app.get('/', (req, res) => res.json({ ok: true }), rescue);

// UserRoutes
app.post('/login', rescue(userController.login));
app.post('/user', userValidate.validateCreation, rescue(userController.create));
app.get('/user', JWTValidate, rescue(userController.getAll));
app.get('/user/:id', JWTValidate, rescue(userController.getOneById));

// CategoryRoutes
app.post('/categories', JWTValidate, rescue(categoryController.create));
app.post('/categories', JWTValidate, rescue(categoryController.create));
app.get('/categories', JWTValidate, rescue(categoryController.getAll));

// PostRoutes
app.get('/post', JWTValidate, rescue(postController.getAll));
app.get('/post/:id', JWTValidate, rescue(postController.getOneById));

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
