import Router from "express"
import { createUser, loginUser } from "../controllers/userController"

const userRoute = Router()

userRoute.post("/api/user/new", createUser)
userRoute.post("/api/user/login", loginUser)

export default userRoute
