import { con } from "../db/dbconnect"
import { createTaskRequest, getTasksRequest } from "../db/queries"
import { IUserRequest } from "../requests/user"
import { taskStatus } from "../types/status"
import { ITask } from "../types/task"

export class Task implements ITask {
    public createAt: Date
    constructor(public name?: string, public description?: string, public status?: taskStatus) {
        this.createAt = new Date()
    }

    createTask(req: IUserRequest) {
        return new Promise((resolve, reject) => {
            createTaskRequest(this.name, this.description, req.user?.id, this.status, this.createAt.toISOString().split('T')[0])
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
}