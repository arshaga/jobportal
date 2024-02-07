import mongoose from 'mongoose'

export const loginSchema  = mongoose.Schema({
  id :{
    type:String,
  },
    name: {
        type: String,
        require:true,
        trim: true
    },
    email:{
        type: String,
        require:true,
       // unique: true
    },
    password:{
        type: String,
        require:true,
        trim: true

    },
    auth:{
    type:String,
    },
    
}, {timeStamps :true})

const model = mongoose.model("login",loginSchema)

export default model