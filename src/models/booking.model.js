import mongoose from "mongoose"

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user_id: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  furniture_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Furniture' 
  },
  start_date: Date,
  end_date: Date,
  total_price: Number,
  status: String,

},{
    timestamps:true,

});

export const Booking = mongoose.model('Booking', bookingSchema);


