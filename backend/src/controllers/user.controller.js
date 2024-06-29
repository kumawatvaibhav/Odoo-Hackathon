const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model")

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ email, firstName, lastName, password: hashedPassword });
        await user.save();
        res.json({ message: 'User registered successfully' });
    } catch(error) {
        res.status(500).send("Error while registration")
        console.error("Something went wrong", error)
    }
}

const login = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    delete user.password;
    // console.log
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: 'Login failed' });
    }
};

const getUser = async (req,res) => {
    const filter = req.params.userId ? {
        _id : req.params.userId
    } : {};
    const users = await userModel.find(filter, {"firstName"  : 1,"lastName" : 1,
    "occupation" : 1,"description" : 1, email: 1});
    res.send(users);
} 

const updateUser = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await userModel.updateOne({
        _id : req.params.userId
    }, newPayload);
    res.send(newDbResp);
}

const CountUser = async(req,res) => {
    const count = await userModel.countDocuments();
}

module.exports = {register,login,getUser,updateUser,CountUser}