import mongoose from "mongoose"

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category' 
  },
  price_per_day: {
    type: Number,
    required: true,
  },
  image: {
    type: String,

  },
},{
    timestamps:true,

});

const Furniture = mongoose.model('Furniture', furnitureSchema);
export default Furniture;

