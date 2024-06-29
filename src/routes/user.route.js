import { changeCurrentPassword, getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccount } from "../controllers/user.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middleware/middleware.authMiddleware.js";

const router=Router();

router.route("/register").post(registerUser)

    router.route("/login").post(loginUser)


    //secured routes
    router.route("/logout").post(verifyJWT,logoutUser)
    router.route("/refresh-token").post(refreshAccessToken)
    router.route("/change-password").post(verifyJWT,changeCurrentPassword)
    router.route("/current-user").get(verifyJWT,getCurrentUser)
    router.route("update-account").patch(verifyJWT,updateAccount)

    
export default router