import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv, { config } from 'dotenv'
import jobR from './routes/jobR.js'

const app = express();

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connected to mongodb')
    } catch (err) {
        console.log(err)
    }
}


app.use(cors())
app.use(express.json())

app.use("/jobportal/",jobR)

app.use((err, req, res, next) => {
    const errMessage = err.message || "Error from backend"
    const errStatus = err.status || 500
    res.status(err.message).json({
        success: false,
        stack: err.stack,
        message: errMessage
    })
})

app.listen(8800, () => {
    connect()
    console.log('connected to backend')
})