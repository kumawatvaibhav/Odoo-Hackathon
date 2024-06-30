import {Furniture} from '../models/furniture.model.js';

// Create a new furniture item
export const createFurniture = async (req, res) => {
    try {
        const newFurniture = new Furniture(req.body);
        await newFurniture.save();
        res.status(201).json(newFurniture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all furniture items
export const getAllFurniture = async (req, res) => {
    try {
        const furniture = await Furniture.find().populate('category_id');
        res.status(200).json(furniture);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get furniture item by ID
export const getFurnitureById = async (req, res) => {
    try {
        const furniture = await Furniture.findById(req.params.id).populate('category_id');
        if (!furniture) return res.status(404).json({ message: 'Furniture not found' });
        res.status(200).json(furniture);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update furniture item by ID
export const updateFurniture = async (req, res) => {
    try {
        const updatedFurniture = await Furniture.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFurniture) return res.status(404).json({ message: 'Furniture not found' });
        res.status(200).json(updatedFurniture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete furniture item by ID
export const deleteFurniture = async (req, res) => {
    try {
        const deletedFurniture = await Furniture.findByIdAndDelete(req.params.id);
        if (!deletedFurniture) return res.status(404).json({ message: 'Furniture not found' });
        res.status(200).json({ message: 'Furniture deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
