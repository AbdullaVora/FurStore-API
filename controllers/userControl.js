const userModel = require("../models/userModel");
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const addUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const hashPassword = await bycrypt.hash(password, 10);

        const newUser = await userModel.create({ name, email, password: hashPassword, role });
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await userModel.findByIdAndDelete(id);
        res.status(200).json(deleteUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    try {
        const updateUser = await userModel.findByIdAndUpdate(id, { name, email, password, role });
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            const passCheck = await bycrypt.compare(password, user.password);
            if (passCheck) {
                const token = jwt.sign({ id: user._id, roles: user.role }, process.env.JWT_SECRET);
                res.status(200).json({ message: "Login Success", token, userName: user.name });
            } else {
                res.status(400).json({ message: "Password is incorrect" });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message }); F
    }
}

module.exports = { addUser, getUser, deleteUser, updateUser, login };
