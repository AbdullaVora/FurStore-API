const express = require('express');
const { login, getUser, updateUser, deleteUser, addUser } = require('../controllers/userControl');

const router = express.Router();

router.post('/login', login);
router.post('/register',addUser);
router.get('/users', getUser);
router.post('/userUpdate:id', updateUser);
router.post('/userDelete:id', deleteUser);


module.exports = router;