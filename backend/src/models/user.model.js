const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  
  first_name:{ 
    type: String,
  },
  last_name: {
    type: String,
  },
  phone_number: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
