import { Request, Response } from "express"
import { Task } from "../models/task"

export const createTask = (req: Request, res: Response) => {
    let { name, description, status } = req.body
    const task = new Task(name, description, status)
    task.createTask()
        .then((response) => {
            res.status(200).json(task)
        }).catch((error) => {
            res.status(500).json({ message: error })
        })
}

export const getUserTasks = (req: Request, res: Response) => {
    return new Promise((resolve, reject) => {
        const task = new Task()
        task.getTasks()
            .then(<T>(data: T) => {
               res.status(200).json(JSON.parse(data as string))
            }).catch((err) => {
                res.status(500).send({message: err})
            })
    })
}