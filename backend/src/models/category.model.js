import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category:{
        name: String,
        description: String,
        required:true,
    }
 
},{
    timestamps:true,

});

export const Category = mongoose.model('Category', categorySchema);


