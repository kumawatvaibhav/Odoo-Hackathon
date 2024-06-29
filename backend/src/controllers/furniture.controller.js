const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const furnitureModel = require("../models/furniture.model");

//method to get furniture details : 
const getFurniture = async (req,res) => {
    const filter = req.params.userId ? {
        _id : req.params.userId
    } : {};
    const furniture = await furnitureModel.find(filter, {"id"  : 1,"name" : 1,
    "price_per_day" : 1, "image":1,"location":1 ,"description" : 1,"furnitureRentedIds" : 1});
    res.send(furniture);
} 

//method to update furniture info : 

const updateFurniture = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await furnitureModel.updateOne({
        _id : req.params.furnitureId
    }, newPayload);
    res.send(newDbResp);
}

module.exports = {register,login,getUser,updateUser,CountUser}