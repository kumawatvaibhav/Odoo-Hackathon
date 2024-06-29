const mongoose = require("mongoose")
const projectModel = require("./project.model")
 

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    lastName: {
        type: String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    FurnitureRentedIds:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Projects' }]
    },
    },{
        timestamps : true
    });

export const User=mongoose.model("User",userSchema)

