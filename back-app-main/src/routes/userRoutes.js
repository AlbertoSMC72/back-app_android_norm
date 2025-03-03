const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/users', UserController.createUser);
router.post('/login', UserController.login);

module.exports = router;