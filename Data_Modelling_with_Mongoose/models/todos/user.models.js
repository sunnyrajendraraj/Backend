import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required: true,
        uniquie: true,
        lowercase: true
    },

    email : {
        type : String,
        required: true,
        uniquie: true,
        lowercase: true
    },

    password : {
        type : String,
        required : [true, "Password is a must"]
    }
    
},{timestamps : true}) 

export const User = mongoose.model("User", userSchema)