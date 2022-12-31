import Router from "express"
import { createTask, getUserTasks } from "../controllers/taskController"

const taskRoute = Router()
const verify = require("../middlewares/verify")

taskRoute.post("/api/task/new", verify, createTask)
taskRoute.get("/api/tasks", verify, getUserTasks)

export default taskRoute