import  mongoose   from 'mongoose'

const companySchema = mongoose.Schema({
    id:{
        type:String,
        // require:true

    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true

    },
    jobtitile:{
        type:String,
        require:true

    },
    description:{
        type:String,
        require:true
    },
    employee : {
        type:String,
    },
}, {timeStamps :true})

const model = mongoose.model("company",companySchema)

export default model