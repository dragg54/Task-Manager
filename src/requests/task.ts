import { Request } from "express"
import { IUserRequest } from "./user"

export interface ITaskRequest extends Request, IUserRequest{
    userId?: import("jsonwebtoken").JwtPayload 
}