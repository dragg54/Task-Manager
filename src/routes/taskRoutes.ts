import Router from "express"
import { createTask, findAllTasks } from "../controllers/taskController"

const taskRoute = Router()
const verify = require("../middlewares/verify")

taskRoute.post("/api/v1/task/new", verify, createTask)
taskRoute.get("/api/v1/tasks", verify, findAllTasks)

export default taskRoute