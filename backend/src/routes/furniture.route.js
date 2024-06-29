const express = require("express");
const router = express.Router();
const furnitureHandler = require("../controllers/furniture.controller"); 
const { verifyToken } = require("../middleware/middleware.authMiddleware");

//post = create

router.get("/furniture/:furnitureID?",furnitureHandler.getFurniture);
router.patch("/furniture/:furnitureID",[verifyToken],furniture.updateFurniture);
router.delete("/furniture/:furnitureID",[verifyToken],furnitureHandler.deleteFurniture);

module.exports = router;