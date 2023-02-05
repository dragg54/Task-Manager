import { createTaskRequest, deleteTaskRequest, findTask, getTasksRequest, updateTaskByIdRequest, updateTaskStatusRequest } from "../db/queries"
import { IUserRequest } from "../requests/user"
import { taskStatus } from "../types/status"
import { ITask } from "../types/task"

export class Task implements ITask {
    public createdAt: Date
    public updatedAt: Date
    constructor(public name?: string, public description?: string, public status?: taskStatus) {
    }

    createTask(req: IUserRequest) {
        const createdAt = new Date()
        return new Promise((resolve, reject) => {
            createTaskRequest(this.name, this.description, req.user?.id,
                this.status, createdAt.toISOString().split('T')[0])
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    getTasks(req: IUserRequest) {
        return new Promise((resolve, reject) => {
            getTasksRequest(req.user?.id)
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    getTask(req: IUserRequest){
        return new Promise((resolve, reject)=>{
            findTask(req)
            .then((result)=>{
                resolve(result)
            }).catch((err)=>{
                reject(err)
            })
        })
    }

    updateTask(id: string) {
        return new Promise((resolve, reject) => {
            updateTaskByIdRequest(id,  this.description)
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    deleteTask(id: string) {
        return new Promise((resolve, reject) => {
            deleteTaskRequest(id)
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    updateTaskStatus(id: string, status: string){
        return new Promise((resolve, reject)=>{
            updateTaskStatusRequest(id, status)
            .then((result)=>{
                resolve(result)
            }).catch((error)=>{
                reject(error)
            })
        })
    }
}