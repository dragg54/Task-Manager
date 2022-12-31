import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { findUserByEmail } from "../db/queries";
import { User } from "../models/user";
import { checkUserExists, hashPassword, unHashPassword } from "../utils/helpers";

export const createUser = (req: Request, res: Response) => {
    let { firstName, lastName, email, password } = req.body
    checkUserExists(email)
        .then((data) => {
            console.log("hello")
            hashPassword(password)
                .then((password) => {
                    const user = new User(firstName, lastName, email, password as string)
                    user.createUser()
                        .then(() => {
                            res.status(200).json(user)
                        }).catch((err) => {
                            console.log(err)
                        })
                }).catch((err)=>{
                    console.log(err)
                })
        }).catch((err)=>{
            res.status(409).send(err)
        })
}

export const loginUser = (req: Request, res: Response) => {
    let { email, password } = req.body
    findUserByEmail(email)
        .then((user: any) => {
            unHashPassword(JSON.parse(user).password, password)
                .then((status) => {
                    console.log("hello")
                    const token = jwt.sign({ id: JSON.parse(user).id }, "ihihoahhh9hh")
                    res.header("token", token).send(token)
                }).catch((error) => {
                    console.log({"error:":error})
                })
        }).catch((error) => {
            res.status(404).json({ message: error })
        })
}