const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');
const createMiddleware = require('../middlewares/createMiddleware');
const loginController = require('../controllers/loginController');

router.post('/user', createMiddleware.createMiddleware, createController.createUser);
router.post('/login', loginController.loginController);

module.exports = router;