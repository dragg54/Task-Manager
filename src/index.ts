import dotenv from "dotenv"
import { connectDb } from "./db/dbconnect"

const app = require("./app")
connectDb()
dotenv.config({path:__dirname + "/.env"})
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})