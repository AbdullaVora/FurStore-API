const express = require('express');
const { login, getUser, updateUser, deleteUser, addUser } = require('../controllers/userControl');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productControl');

const router = express.Router();

router.post('/api/login', login);
router.post('/api/register',addUser);
router.get('/api/users', getUser);
router.post('/api/userUpdate:id', updateUser);
router.post('/api/userDelete:id', deleteUser);

router.post('/api/product/addProduct', addProduct);
router.get('/api/product/getProducts', getProducts);
router.put('/api/product/updateProduct/:id', updateProduct);
router.delete('/api/product/deleteProduct/:id', deleteProduct);


module.exports = router;