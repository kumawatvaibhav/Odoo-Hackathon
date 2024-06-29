import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin :process.env.CORS_ORIGIN,
    credentials:true,

}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"));
app.use(cookieParser())

//routes import 
import userRouter from "./routes/user.route.js"
import paymentRoutes from "./routes/paymentRouter.route.js"
import categoryRoutes from "./routes/category.route.js"
import furnitureRoutes from "./routes/furniture.route.js"
import bookingRoutes from "./routes/booking.route.js"


//routes declaration

app.use("/api/v1/users",userRouter)
app.use("/api",paymentRoutes)
app.get("/api/getkeys",(req,res)=>res.status(200).json({key:process.env.RAZORPAY_API_KEY}))
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/Furniture",furnitureRoutes)
app.use("/api/v1/booking",bookingRoutes)

export {app}


