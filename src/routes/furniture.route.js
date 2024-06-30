import { Router } from "express";

import {
    createFurniture,
    getAllFurniture,
    getFurnitureById,
    updateFurniture,
    deleteFurniture
} from '../controllers/furniture.controller.js';

const router =Router();

// Route to create a new furniture item
router.post('/createfurniture', createFurniture);

// Route to get all furniture items
router.get('/getallfurniture', getAllFurniture);

// Route to get a single furniture item by ID
router.get('/getfurniture/:id', getFurnitureById);

// Route to update a furniture item by ID
router.put('/updatefurniture/:id', updateFurniture);

// Route to delete a furniture item by ID
router.delete('/deletefurniture/:id', deleteFurniture);

export default router;



