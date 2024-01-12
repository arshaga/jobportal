import  mongoose   from 'mongoose'

const companySchema = mongoose.Schema({
    FirstName:{
        type:String,
        require:true

    },
    LastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true

    }
})

const model = mongoose.model("company",companySchema)

export default model