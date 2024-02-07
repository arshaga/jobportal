import companyModel from "../models/companyM.js"
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js" 


export const postCompany = async (req, res, next) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const pass = bcrypt.hashSync(req.body.password, salt);
      const company = companyModel({
        ...req.body,
        password: pass,
      });
      await company.save()
      res.status(200).json({ message: " Company user add successfully", success: true });
    } catch (err) {
      next(createError(400, err.message));
    }
  };

  export const updateCompany = async (req,res,next)=>{
    try{
        const comapnyUpdate = await companyModel.findByIdAndUpdate(req.params.value,
            {$set:{
                username:req.body.username,
                password:req.body.password,
                description:req.body.description,

            }},{new:true})
            res.status(200).json("comapny user add successfully")
       
    }catch(err){
      console.log(err)
        next(createError(400,err.message))
    }

  }
  export const deleteCompany = async ( req, res,next) =>{
    try{
      const companyDelete = await userModel.findByIdAndDelete(req.params.id,)
      res.status(200).json("user delete successfull")
    }catch(err){
     next(createError(400,err.message))
  
    }
  }
