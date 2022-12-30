import { Request, Response } from "express"
import { Task } from "../models/task"

export const createTask=(req:Request, res: Response)=>{
    let{name, description, status} = req.body
    const task = new Task(name, description, status)
    task.createTask()
    .then((response)=>{
        res.status(200).json(response)
    }).catch((error)=>{
        res.status(500).json({message:error})
    })
}