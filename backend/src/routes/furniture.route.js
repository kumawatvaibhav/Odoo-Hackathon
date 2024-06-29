const express = require("express");
const router = express.Router();
const furnitureHandler = require("../controllers/furniture.controller"); 
const { verifyToken } = require("../middleware/middleware.authMiddleware");

//post = create
router.post("/register",furnitureHandler.register); 
router.post("/login",furnitureHandler.login);
router.get("/users/:userId?",furnitureHandler.getUser);
router.patch("/users/:userId",[verifyToken],furniture.updateUser);
router.get("/users/",furnitureHandler.CountUser);
// router.delete("/user/:projectId",projectHandlers.deleteProject);

module.exports = router;