const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');
const createMiddleware = require('../middlewares/createMiddleware');
const loginController = require('../controllers/loginController');
const getUsuariosController = require('../controllers/getUsuariosController');
const authToken = require('../middlewares/authToken');

router.post('/user', createMiddleware.createMiddleware, createController.createUser);
router.post('/login', loginController.loginController);
router.get('/users', authToken.authToken, getUsuariosController.getUsuariosController);

module.exports = router;