

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGODB Connected !! DB Host :${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1);

    }
}

export default connectDB;
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Odoo-Furniture:123456789@Odoo@furniture-renting.orxtauf.mongodb.net/?appName=Furniture-Renting";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
