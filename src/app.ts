import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { connectDb } from "db/dbconnect"

const app = express()
connectDb()
app.use(bodyParser.urlencoded({extended: true}))
dotenv.config({path:"./env"})
app.listen("3000", ()=>{
    console.log("listening to port 3000")
})