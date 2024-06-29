const mongoose = require("mongoose")
 

const userSchema = new mongoose.Schema({
    role:{
        type: String,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number:{
        type: Int16Array,
    },
    FurnitureRentedIds:{
        type: SVGAnimatedInteger,
    },
    },{
        timestamps : true
    });

const userModel = mongoose.model("Users",userSchema);
module.exports = userModel;