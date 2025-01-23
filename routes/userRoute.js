const express = require('express');
const { login, getUser, updateUser, deleteUser, addUser } = require('../controllers/userControl');

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const result = await login(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const result = await addUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get('/users', getUser);
router.post('/userUpdate:id', updateUser);
router.post('/userDelete:id', deleteUser);


module.exports = router;