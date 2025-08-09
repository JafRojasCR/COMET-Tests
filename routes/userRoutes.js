const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/register', userController.createUser);

module.exports = router;
