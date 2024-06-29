
import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";


const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new apiErrorpiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser=asyncHandler(async(req,res)=>{
       //get user details from frontend
       //validation-not empty
       //check if user already exist:username,email
       //check for images,check for avatar
       //upload to cloudinary
       //create user object
       //remove password and refresh token field from response 
       //check for user creation
       //return res
      const {email,password,firstName,lastName}=req.body;

      if(
        [firstName,lastName,email,password].some((field)=>field?.trim()==="")

      ){
        throw new apiError(400,"All the fields are required")
      }

      const existedUser=await User.findOne(
        {
            email
        }
      )
      if(existedUser){
        throw new apiError(409,"User with email or username already exists");

      }
     
       const user=await User.create({
        firstName,
        lastName,
        email,
        password,
       })

       const createUser=await User.findById(user._id).select(
        "-password -refreshtoken"
       )

       if(!createUser){
        throw new apiError(500, "Something went wrong while registering the user")
       }

       return res.status(201).json(
        new apiResponse(200, createUser, "User registered Successfully")
    )

})

const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const {email, password} = req.body
    console.log(email);

    if (!email) {
        throw new apiError(400, "username or email is required")
    }
    

    const user = await User.findOne({email
    })

    if (!user) {
        throw new apiError(404, "User does not exist")
    }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new apiError(401, "Invalid user credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new apiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})


const logoutUser=asyncHandler(async(req,res)=>{
        User.findByIdAndUpdate(
           req.user._id,
           {
             $unset:{  //update 
                refreshToken:1
             }
           } ,

           {
            new:true,
           }
        )

        
     const options={
        httpOnly:true,
        secure:true,

     }
     return res.status(200)
     .clearCookie("accessToken",options)
     .clearCookie("refreshtoken",options)
     .json(new apiResponse(200,{},"User Logged out "))

})

const refreshAccessToken=asyncHandler(async(req,res)=>{
   const incomingRefreshToken=await req.cookies.refreshToken || req.body.refreshToken

   if(!incomingRefreshToken){
    throw new apiError(401,"Unauthorized Request")

   }

  try {
     const decodedToken=jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
     )
  
    const user=await User.findById(decodedToken?._id)
  
    if(!user){
      throw new apiError(401,"Invalid refresh Token")
  
    }
    if(incomingRefreshToken!==user?.refreshToken){
      throw new apiError(401,"Refresh token is expired or Used")
    }
    const options={
      httpOnly:true,
      secure:true,
    }
    const {accessToken,newRefreshToken}=await generateAccessAndRefreshToken(user._id)
    return res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",newRefreshToken,options)
    .json(
      new apiResponse(
         200,
         {accessToken,refreshToken:newRefreshToken},
         "Access token refreshed"
         
  
      )
    )
  } catch (error) {
          throw new apiError(401,error?.message || "Invalid refresh token")    
    
  }
})

const changeCurrentPassword=asyncHandler(async(req,res)=>{
       const {oldPassword,newPassword}=req.body
       const user=await User.findById(req.user?._id)
       const isPasswordCorrect=await user.isPasswordCorrect(oldPassword )

       if(!isPasswordCorrect){
          throw new apiError(400,"Invalid old Password")

       }
       user.password=newPassword
       await user.save({validateBeforeSave:false})

       return res.status(200).json(
        new apiResponse(
            200,
            {},
            "Password changed Successfully",

        )
       )

   

})

const getCurrentUser=asyncHandler(async(req,res)=>{
      return res.status(200).json(200,req.user,"Current User fetched SuccessFully")
})

const updateAccount=asyncHandler(async(req,res)=>{
     const {fullName,email}=req.body
     if(!fullName || !email)
        {
            throw new apiError(400,"All fields are required")
        }
    const user=await  User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                firstName,
                lastName,
                email:email.toLowerCase()

            }
        },
        {
            new:true

        }
    ).select("-password ")
     return res.status(200)
     .json(new apiResponse(200,user,"Account details update successfully"))
      
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser, 
    updateAccount,
   
}

