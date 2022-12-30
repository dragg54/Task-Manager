import { findUserByEmail } from "db/queries"
import { User } from "models/user"
import { Response, Request, NextFunction } from "express";
import { hashPassword } from "utils/helpers";

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
        }).catch((error)=>{
            res.status(409).json({message: error})
        })
}