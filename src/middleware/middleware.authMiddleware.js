import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyJWT=asyncHandler(async(req,res,next)=>{
   try {
     const token=await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
 
     if(!token){
         throw new apiError(401,"Unauthorized access")
 
     }
     const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
     const user=await User.findById(decodedToken?._id).select(
         "-password -refreshToken"
     )
     if(!user){
         throw new apiError(401,"Invalid access token")
 
     }
     req.user=user  //user ka acces de diya
     next()                 
   } catch (error) {
    
        throw new apiError(401,error?.message || "Invalid access token")
   }

})
