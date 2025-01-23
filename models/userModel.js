const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' },
    createAt: { type: String, default: Date.now },
})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;

