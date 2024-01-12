import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    id:{
        type:String,
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim:true
    },
    
})

const model = mongoose.model("user", userSchema)

export default model