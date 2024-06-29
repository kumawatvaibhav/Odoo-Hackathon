require("dotenv").config() //header file
require("./db/index")
const express = require("express");
const cors = require('cors')

const categoryRouter = require("./routes/categories.routes");
const userRouter = require("./src/routes/user.route");
const furnitureRouter = require("./src/routes/furniture.route");

console.log(process.env.MONGO_CONNECTION_STRING);

const app = express();
app.use(cors("*"))
const PORT = 3001;

app.use(express.json());


app.use("/api",categoryRouter)
app.use("/api",userRouter);
app.use("/api",furnitureRouter);

//start the sever
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });