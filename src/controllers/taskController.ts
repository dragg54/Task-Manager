import { Request, Response } from "express"
import { Task } from "../models/task"
import { IUserRequest } from "../requests/user"

export const createTask = (req: IUserRequest, res: Response) => {
    let { name, description, status } = req.body
    const task = new Task(name, description, status)
    task.createTask(req)
        .then((response) => {
            res.status(200).json(task)
        }).catch((error) => {
            res.status(500).json({ message: error })
        })
}

export const getUserTasks = (req: IUserRequest, res: Response) => {
    return new Promise((resolve, reject) => {
        const task = new Task()
        task.getTasks(req)
            .then((data) => {
               res.status(200).json(JSON.parse(data as string))
            }).catch((err) => {
                res.status(500).send({message: err})
            })
    })
}