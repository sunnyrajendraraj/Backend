// require('dotenv').config({path : './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.db.js';
dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000

connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running at port : ${port}`);
    })
})
.catch(()=>{
    console.error("MongoDB connection failed");
})


/*

import mongoose from 'mongoose'
import { DB_NAME } from '../constants'

import express from 'express';
import { error } from 'console';
const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // Listners : Immedietely after database connnection
        
        app.on("error", (error)=>{
            console.log("ERROR ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is running  on port ${PORT}`)
        })

    }catch(error){
        console.error("ERROR: ", error);
        throw error
    }
})()

*/