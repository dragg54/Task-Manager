import Router from "express"
import { createUser, loginUser } from "../controllers/userController"

const userRoute = Router()

userRoute.post("/api/v1/user/new", createUser)
userRoute.post("/api/v1/user/login", loginUser)

export default userRoute
