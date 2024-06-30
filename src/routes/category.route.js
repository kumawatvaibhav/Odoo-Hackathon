import {Router} from "express"
const router = Router();
import {createCategory, deleteCategory, getCategory, updateCategory} from "../controllers/category.controller.js"
import { verifyJWT } from "../middleware/middleware.authMiddleware.js";


router.route("/categories").post(verifyJWT,createCategory); 
router.route("/getcategories").get(verifyJWT,getCategory);
router.route("/categories/:categoryId").patch(verifyJWT,updateCategory);
router.route("/categories/:categoryId").delete(verifyJWT,deleteCategory);


export default router;
