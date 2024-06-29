import {Router} from "express"
import Furniture from "../controllers/furniture.controller.js"
import { verifyJWT } from "../middleware/middleware.authMiddleware.js";

const router =Router();

//post = create

router.get("/furniture/:furnitureID?",Furniture.getFurniture);
router.patch("/furniture/:furnitureID",[verifyJWT],Furniture.updateFurniture);


export default router