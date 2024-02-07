import express from 'express';
import { deleteUser, getUser, postUser, updateUser } from "../controllers/user.js"
import { login, logout } from '../controllers/auth.js';
import { deleteCompany, postCompany, updateCompany } from '../controllers/comp.js';
import { postJob, updateJob } from '../controllers/jobPost.js';
import { checkToken } from '../utils/checkAuth.js';


const router = express.Router()

router.post("/reg",postUser)
router.post("/login",login)
router.put("/update",checkToken,updateUser)
router.delete("/delete",deleteUser)
router.post("/regi",postCompany)
router.put("/updateco",updateCompany)
router.delete("/dele",deleteCompany)
router.post("/logout",logout)
router.get("/user",getUser)
router.post("/addjob",postJob)
router.post("/upjob",checkToken,updateJob)

export default router;