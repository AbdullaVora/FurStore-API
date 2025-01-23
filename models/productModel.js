const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    brand: String,
    code: String,
    category: String,
    color: String,
    size: String,
    description: String,
    price: String,
    quantity: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;