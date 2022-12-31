import { con } from "../db/dbconnect"
import { createTaskRequest, getTasksRequest } from "../db/queries"
import { taskStatus } from "../types/status"
import { ITask } from "../types/task"

export class Task implements ITask {
    public userId: number = 14
    public createAt: Date
    constructor(public name?: string, public description?: string, public status?: taskStatus) {
        this.createAt = new Date()
    }

    createTask() {
        return new Promise((resolve, reject) => {
            createTaskRequest(this.name, this.description, this.userId, this.status, this.createAt.toISOString().split('T')[0])
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    getTasks() {
        return new Promise((resolve, reject) => {
            getTasksRequest(this.userId)
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }
}