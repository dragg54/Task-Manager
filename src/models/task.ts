import { con } from "db/dbconnect"
import { ITask } from "types/task"

export class Task implements ITask {
    public userId: number
    public createAt: Date
    constructor(public name: string, public description: string, public status: taskStatus) {
        this.createAt = new Date()
    }
    createTask() {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO task(name, user_id, description, status, created_at)
            VALUES('${this.name}',
             '${this.userId}'
             , '${this.description}',
              '${this.status}',
              '${this.createAt.toISOString().split('T')[0]})`, (err, rows, fields) => {
                if(!err){
                    resolve(rows)
                }
                reject(err)
            })
        })
    }
}