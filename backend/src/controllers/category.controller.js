const categoriesModel = require("../models/categories.model");
const furnitureModel = require("../models/furniture.model");

//To create a category
//only for admin mode 
const createCategory = async (req,res) => {
    const payload = req.body;
    const dbResp = await categoriesModel.create(payload);
    res.send(dbResp);
}

// to fetch furniture from a category 
const getCategory = async (req,res) => {
    const furniture = await categoriesModel.find();
    res.send(furniture)
} 

// to update a category
const updateCategory = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await categoriesModel.updateOne({
        _id : req.params.categoryId
    }, newPayload);
    res.send(newDbResp);
}

const deleteCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    const isCategoryInUse = await projectModel.findOne({
        categoryIds: {
            $in : categoryId
        }
    });
    if(isCategoryInUse) {
        return res.status(409).send({
            "result" : "Category Already in Use"
        })
    }
    const newDbResp = await categoriesModel.deleteOne({
        _id : categoryId
    });
    res.send(newDbResp);
}

module.exports = {createCategory,getCategory,updateCategory,deleteCategory};