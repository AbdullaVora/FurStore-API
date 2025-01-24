const productModel = require("../models/productModel");

const addProduct = async (req, res) => {
    const { title, brand, code, category, color, size, description, price, quantity, image } = req.body;

    try {
        const newProduct = await productModel.create({ title, brand, code, category, color, size, description, price, quantity, images : image });
        // await newProduct.save();
        console.log(newProduct);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteProduct = await productModel.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(deleteProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, brand, code, category, color, size, description, price, quantity, image } = req.body;

    try {
        const updateProduct = await productModel.findByIdAndUpdate(id, { title, brand, code, category, color, size, description, price, quantity, image }, { new: true });
        if (!updateProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updateProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { addProduct, getProducts, deleteProduct, updateProduct };