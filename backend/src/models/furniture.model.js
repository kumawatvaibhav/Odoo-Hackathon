const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const furnitureSchema = new Schema({
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
  availability_status: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;
