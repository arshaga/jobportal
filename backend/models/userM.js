import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        trim:true,
    },
    password: {
            type: String,
            require: true,
            //trim: true
    },
    phno:{
        type:Number,
    },
    summery:{
        type:String,
    },
    exp:{
        type:String,
    },
    skills:{
        type:String,
    },
    language:{
        type:String,
    },
    certificate:{
        type:String,
    },
    education:{
        type:String,
    },
}, {timeStamps :true})

const model = mongoose.model("user", userSchema)

export default model