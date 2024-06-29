import express from 'express';
import { 
    createBooking, 
    getAllBookings, 
    getBookingById, 
    updateBooking, 
    deleteBooking 
} from '../controllers/booking.controller.js';

const router = express.Router();

// Create a new booking
router.post('/createbooking', createBooking);

// Get all bookings
router.get('/getbooking', getAllBookings);

// Get booking by ID
router.get('/getbookingid/:id', getBookingById);

// Update booking by ID
router.put('/update/:id', updateBooking);

// Delete booking by ID
router.delete('/delte/:id', deleteBooking);


export default router;
