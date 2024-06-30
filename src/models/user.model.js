import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    lastName: {
        type: String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    FurnitureRentedIds:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Projects' }]
    },
    refreshToken:{
        type:String,
        
    }
    },{
        timestamps : true
    });

    userSchema.pre("save",async function(next){
        if(!this.isModified("password")) return next(); //if not modifies then go to next
        this.password=await bcrypt.hash(this.password,10);   //if modified then save and hash it and go to next 
        next() 
  
  })
  userSchema.methods.isPasswordCorrect =async function(password){
      return await bcrypt.compare(password,this.password)
  
  }
  
  userSchema.methods.generateAccessToken=function(){
      return jwt.sign({
          _id:this._id,
          email:this.email,
          firstName:this.firstName,
          lastName:this.lastName,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn:process.env.ACCESS_TOKEN_EXPIRY
      }
  )
  
  }
  userSchema.methods.generateRefreshToken=function(){
      return jwt.sign({
          _id:this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn:process.env.REFRESH_TOKEN_EXPIRY
      }
  )
  
  }
export const User=mongoose.model("User",userSchema)

