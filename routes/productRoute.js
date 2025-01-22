const express = require('express');
const { login, getUser, updateUser, deleteUser, addUser } = require('../controllers/userControl');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productControl');

const router = express.Router();

router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);


module.exports = router;