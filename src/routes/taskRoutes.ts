import Router from "express"
import { createTask, deleteTask, findAllTasks, updateTask } from "../controllers/taskController"

const taskRoute = Router()
const verify = require("../middlewares/verify")

taskRoute.post("/api/v1/task/new", verify, createTask)
taskRoute.get("/api/v1/tasks", verify, findAllTasks)
taskRoute.put("/api/v1/task/:id/update", updateTask)
taskRoute.delete("/api/v1/task/:id/delete", deleteTask)

export default taskRoute