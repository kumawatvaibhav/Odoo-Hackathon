
const mongoose = require('mongoose');
const db = require('./db'); // Import your database connection
const User = require('./models/user');
const Furniture = require('./models/furniture');
const Booking = require('./models/booking');
const Payment = require('./models/payment');
const Category = require('./models/category');
const Review = require('./models/review');

// Example usage:
db.once('open', async () => {
  // Create a new user
  const newUser = new User({
    username: 'john_doe',
    email: 'john@example.com',
    password_hash: 'hashed_password'
  });
  await newUser.save();

  // Find all users
  const users = await User.find();

  console.log('Users:', users);

  // Close the connection after finishing operations
  mongoose.connection.close();
});
