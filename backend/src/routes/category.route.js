const express = require("express");
const router = express.Router();
const categoryHandlers = require("../controller/categories.controller"); 

router.post("/categories",categoryHandlers.createCategory); 
router.get("/categories",categoryHandlers.getCategory);
router.patch("/categories/:categoryId",categoryHandlers.updateCategory);
router.delete("/categories/:categoryId",categoryHandlers.deleteCategory);


module.exports = router;