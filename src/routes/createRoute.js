const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');
const createMiddleware = require('../middlewares/createMiddleware');

router.post('/user', createMiddleware.createMiddleware, createController.createUser);

module.exports = router;