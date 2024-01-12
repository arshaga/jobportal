import express from 'express';
import {postUser} from "../controllers/user.js"


const router = express.Router()

router.post("/Adduser",postUser)


export default router;