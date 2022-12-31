import Router from "express"
import { createTask, getUserTasks } from "../controllers/taskController"

const taskRoute = Router()

taskRoute.post("/api/task/new", createTask)
taskRoute.get("/api/tasks", getUserTasks)

export default taskRoute