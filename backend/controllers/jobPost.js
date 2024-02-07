import { createError } from "../utils/error.js"
import jobModel from "../models/jobM.js"

export const postJob = async(req,res,next)=>{
    try{
        console.log("helllo")

        const job = jobModel({
            job_id:req.user.id,
            ...req.body,
        })
        await job.save()

        res.status(200).json({message:"Job Posted",success:true})

    }catch(err){
        console.log(err)
        next(createError(500,err.message))
    }
}

export const updateJob = async(req,res,next)=>{
    try{

    }catch(err){
        console.log(err);
        next(createError(400,err.message))
    }
}

export const getJob = async(req,res,next)=>{
    try{
        const deleteJob = await jobModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Job deleted successfully") 

    }catch(err){
        return next(createError(400,"No Job Found"))
    }
}