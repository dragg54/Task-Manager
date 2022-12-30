import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { connectDb } from "./db/dbconnect"
import userRoute from "./routes/userRoute"
import cors from "cors"

const app = express()
connectDb()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
dotenv.config({path:"./env"})
app.use("/", userRoute)
app.listen("3000", ()=>{
    console.log("listening to port 3000")
})