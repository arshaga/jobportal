import mongoose from 'mongoose'

export const loginSchema  = mongoose.Schema({
    username: {
        type: String,
        require:true,
        trim: true
    },
    email:{
        type: String,
        require:true,
        trim: true
    },
    password:{
        type: String,
        require:true,
        trim: true

    }

}, {timeStamps :true})

const model = mongoose.model("login",loginSchema)

export default model