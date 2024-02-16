const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const validationMiddleware = require('../middleware/validationMiddleware');

router.post('/login', validationMiddleware.validateLogin, authController.login);
router.post('/register', validationMiddleware.validateRegister, authController.register);

module.exports = router;