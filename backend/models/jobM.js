import  mongoose   from 'mongoose'

const jobSchema = mongoose.Schema({ 
    
    job_id:{
    type:String,
    required:true,
    },
    jobtitle:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true,
        trim:true

    },
    description:{
        type:String,
        require:true
    },
    about:{
        type:String,
    },


    location:{
        type:String
    },
    totaljob:{
        type:Number,
        require:true,
        trim:true,

    },
}, {timeStamps :true})

const model = mongoose.model("job",jobSchema)

export default model