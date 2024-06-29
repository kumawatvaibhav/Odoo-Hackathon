import Category from "../models/category.model.js";
import Furniture from "../models/furniture.model.js";

// To create a category
// Only for admin mode
export const createCategory = async (req, res) => {
    try {
        const payload = req.body;
        const dbResp = await Category.create(payload);
        res.send(dbResp);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

// To fetch furniture from a category
export const getCategory = async (req, res) => {
    try {
        const furniture = await Category.find();
        res.send(furniture);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

// To update a category
export const updateCategory = async (req, res) => {
    try {
        const newPayload = req.body;
        const newDbResp = await Category.updateOne({
            _id: req.params.categoryId
        }, newPayload);
        res.send(newDbResp);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

// To delete a category
export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const isCategoryInUse = await Furniture.findOne({
            categoryIds: {
                $in: categoryId
            }
        });
        if (isCategoryInUse) {
            return res.status(409).send({
                result: "Category Already in Use"
            });
        }
        const newDbResp = await Category.deleteOne({
            _id: categoryId
        });
        res.send(newDbResp);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
