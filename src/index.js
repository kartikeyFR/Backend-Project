// import mongoose from "mongoose"; 
// import { DB_NAME } from "./constants.js";
// import express from "express";
// const app=express();   
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.error("ERROR:",error)
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })

//     }
//     catch(error){
//         console.error("ERROR:",error)
//         throw error
//     }



// })()

import connectDB from "./db/index.js";
import dotenv from "dotenv";
import {app} from "./app.js"

dotenv.config({
    path:"./env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on ${process.env.PORT}`)
    })
    app.on("Error:",(err)=>{
        console.log("Error:",err)
        throw err
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED",err)
})
