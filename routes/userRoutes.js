const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/', userController.getAll);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.profile);
router.get('/:id', userController.profileById);
router.put('/:id', userController.updateUser);
router.put('admin/:id', userController.updateUserToAdmin);
router.delete('/:id', userController.deleteUser);

module.exports = router;