import {Router} from "express"
const router = Router();
import {createCategory, deleteCategory, getCategory, updateCategory} from "../controllers/category.controller.js"


router.route("/categories").post(createCategory); 
router.route("/getcategories").get(getCategory);
router.route("/categories/:categoryId").patch(updateCategory);
router.route("/categories/:categoryId").delete(deleteCategory);


export default router;
