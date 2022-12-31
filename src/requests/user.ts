import { Request } from "express"

export interface IUserRequest extends Request{
    user?: import("jsonwebtoken").JwtPayload 
}