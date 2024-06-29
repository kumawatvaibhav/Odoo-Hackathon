const mongoose = require("mongoose");
//Defining Schema for Furniture in the inventory

const furnitureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price_per_day: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    furnitureRentedIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        }
    ]
}, {
    timestamps: true
});

const furnitureModel = mongoose.model("Furniture", furnitureSchema);
module.exports = furnitureModel;
