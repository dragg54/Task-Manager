import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { connectDb } from "./db/dbconnect"
import userRoute from "./routes/userRoute"
import cors from "cors"
import taskRoute from "./routes/taskRoutes"

const app = express()
connectDb()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/", taskRoute)
app.use("/", userRoute)
dotenv.config({path:__dirname + "/.env"})
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})