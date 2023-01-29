import { Request, Response } from "express"
import { Task } from "../models/task"
import { ITaskRequest } from "../requests/task"
import { IUserRequest } from "../requests/user"

export const createTask = (req: ITaskRequest, res: Response) => {
    let { name, description, status } = req.body
    const task = new Task(name, description, status)
    task.createTask(req)
        .then((response) => {
            res.status(200).json(task)
        }).catch((error) => {
            res.status(500).json({ message: error })
        })
}

export const findAllTasks = (req: ITaskRequest, res: Response) => {
        const task = new Task()
        task.getTasks(req)
            .then((data) => {
                res.status(200).json(JSON.parse(data as string))
            }).catch((err) => {
                res.status(500).send({ message: err })
            })
}

export const findTask = (req: ITaskRequest, res: Response) =>{
   const task = new Task()
   task.getTask(req)
   .then((response)=>{
    res.status(500).json(JSON.parse(response as string))
   }).catch((err)=>{
    res.status(500).send({message: err})
   })
}

export const updateTask = (req: Request, res: Response) => {
    let { name, description, status } = req.body
    const taskId = req.params.id
    const task = new Task(name, description, status)
    if(taskId){
        task.updateTask(taskId)
        .then((result)=>{
            res.status(200).json(task)
        }).catch((error)=>{
            res.status(500).json({message: error})
        })
    }
}

export const updateTaskStatus = (req:Request, res: Response) =>{
    const taskId =req.params.id
    const status = req.body.status
    const task = new Task()
   if(taskId){
    task.updateTaskStatus(taskId, status)
    .then((result)=>{
        res.status(200).json(task)
    }).catch((err=>{
        res.status(500).json({message: err})
    }))
   }
}

export const deleteTask = (req: Request, res: Response) =>{
    const taskId = req.params.id
    const task = new Task()
    if(taskId){
        task.deleteTask(taskId)
        .then((response)=>{
            res.status(200).json({message: `task with id ${taskId} deleted`})
        }).catch((err)=>{
            res.status(500).json({message: err})
        })
    }
}