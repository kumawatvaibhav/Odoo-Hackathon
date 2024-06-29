const mongoose = require("mongoose")
const projectModel = require("./project.model")
 

const userSchema = new mongoose.Schema({
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
    FurnitureRentedIds:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Projects' }]
    },
    },{
        timestamps : true
    });

const userModel = mongoose.model("Users",userSchema);
module.exports = userModel;