
import bcrypt from "bcrypt"
import jwt from "jwt"
import { User } from "../models/user.modal.js";

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, firstName, lastName, password: hashedPassword });
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
    const users = await User.find(filter, {"firstName"  : 1,"lastName" : 1,
    "occupation" : 1,"description" : 1, email: 1});
    res.send(users);
} 

const updateUser = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await User.updateOne({
        _id : req.params.userId
    }, newPayload);
    res.send(newDbResp);
}

const CountUser = async(req,res) => {
    const count = await User.countDocuments();
}

module.exports = {register,login,getUser,updateUser,CountUser}