import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import taskRoute from "./routes/taskRoutes"
import userRoute from "./routes/userRoute"

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", taskRoute)
app.use("/", userRoute)

module.exports = app