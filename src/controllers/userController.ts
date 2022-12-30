import { findUserByEmail, findUserByEmailAndPassword } from "db/queries"
import { User } from "models/user"
import { Response, Request, NextFunction } from "express";
import { hashPassword, unHashPassword } from "utils/helpers";
import jwt from "jsonwebtoken"
import { Task } from "types/task";

export const createUser = (req: Request, res: Response) => {
    let { firstName, lastName, email, password } = req.body
    findUserByEmail(email)
        .then(() => {
            hashPassword(password)
                .then(<T>(password: T) => {
                    const user = new User(firstName, lastName, email, password as string)
                    user.createUser()
                        .then(() => {
                            res.status(200).json(user)
                        })
                })
        }).catch((error) => {
            res.status(409).json({ message: error })
        })
}

export const loginUser = (req: Request, res: Response) => {
    let { email, password } = req.body
    findUserByEmail(email)
        .then((user: any) => {
            unHashPassword(password, user.password)
                .then(() => {
                    const token = jwt.sign({ id: user.id }, "ihihoahhh9hh")
                    res.header("token", token).send(token)
                }).catch((error)=>{
                    console.log(error)
                })
        }).then((error)=>{
            res.status(404).json({message: error})
        })
}