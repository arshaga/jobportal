import userModel from "../models/userM.js"
import bcrypt from "bcrypt"



export const postUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(req.body.password, salt);
    const user = userModel({
      ...req.body,
      password: pass,
    });
    await user.save();
    res.status(200).json({ message: "user add successfully", success: true });
  } catch (err) {
    next(createError(400, err.message))
    console.log(err)
  }
};