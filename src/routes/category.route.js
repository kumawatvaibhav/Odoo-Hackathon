import {Router} from "express"
const router = Router();
const categoryHandlers = require("../controller/category.controller.js"); 

router.post("/categories",categoryHandlers.createCategory); 
router.get("/categories",categoryHandlers.getCategory);
router.patch("/categories/:categoryId",categoryHandlers.updateCategory);
router.delete("/categories/:categoryId",categoryHandlers.deleteCategory);


module.exports = router;