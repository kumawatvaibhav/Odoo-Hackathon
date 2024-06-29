const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  booking_id: { type: Schema.Types.ObjectId, ref: 'Booking' },
  amount: Number,
  payment_method: String,
  payment_status: String,
  transaction_id: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
