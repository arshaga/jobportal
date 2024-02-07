import bcrypt from "bcrypt"
import { createError } from "../utils/error.js"
import loginModel from "../models/loginM.js"
import userModel from "../models/userM.js"

export const postUser = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10)
        const pass = bcrypt.hashSync(req.body.password,salt)
console.log(pass)
        const user = userModel({
            ...req.body,
            password : pass,
        })
        const login = loginModel({
            _id:user._id,
            ...req.body,
            password:pass,
            auth:"User",
        }) 

        await user.save()
        await login.save()

        res.status (200).json({message:"successfully added",success:true})


    }

    catch(err)
    {
    next(createError(400,err.message))
    console.log(err)
    }
}

export const updateUser = async(req,res,next)=>{
    try{
        if(req.body.password){
            const salt = bcrypt.genSaltSync(10)
            let pass = bcrypt.hashSync(req.body.password,salt)
            req.body.password = pass
        console.log(pass)
        }
        // const userUpdate =
        
        await userModel.findByIdAndUpdate(req.user.id,{
            $set:{
                ...req.body,
           },
        })
        await loginModel.findByIdAndUpdate(req.user.id,{
            $set:{
                ...req.body,
           },
        },{new:true})
            res.status(200).json({message:"userUpdate",success:true})

    }catch(err)
    {
        console.log(err)
        next(createError(400,err.message))
    }
}

export const getUser = async(req,res,next)=>{
    try{

        const getUsers = await userModel.findById(req?.user?.id)
        let users = []
        if(getUsers){
        const {password, ...others} = getUsers?._doc
        users = others
        }
        res.status(200).json({success :true , data: users, message:"user list found"})

    }
    catch(err){
        next(createError(500,err.message))
    }

}

export const deleteUser = async(req,res,next)=>{
    try{
        const deleteUser =await userModel.findByIdAndDelete(req.params.id)
        await loginModel.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted Successfully")

    }catch(err){
        next(createError(500,err.message))
    }
}



// export const postAdmin = async(req,res,next)=>{
//     try{
//         const salt = bcrypt.genSaltSync(10)
//         const pass = bcrypt.hashSync(req.body.password,salt)
// console.log(pass)
//         const user = userModel({
//             ...req.body,
//             password : pass,
//         })
//         const login = loginModel({
//             _id:user._id,
//             ...req.body,
//             password:pass,
//             auth:"Admin",
//         }) 

//         await user.save()
//         await login.save()

//         res.status (200).json({message:"successfully added",success:true})


//     }

//     catch(err)
//     {
//     next(createError(400,err.message))
//     console.log(err)
//     }
// }
