import { con } from "./dbconnect"
import { taskStatus } from "../types/status"
import { IUserRequest } from "../requests/user"
import { ITaskRequest } from "../requests/task"

export const findUserByEmail = (email: string) => {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM user WHERE email = '${email}'`, (err, rows, fields) => {
            if (rows) {
                resolve(JSON.stringify(rows[0]))
            }
            reject(err)
        })
    })
}

export const createUserRequest = (firstName?: string, lastName?: string, email?: string, password?: string) => {
    return new Promise((resolve, reject) => {
        con.query(`INSERT INTO user(first_name, last_name, email, password)
        VALUES('${firstName}', '${lastName}', '${email}', '${password}')`, (err, rows, fields) => {
            if (rows) {
                resolve(rows)
            }
            else {
                reject(err)
            }
        }
        )
    })
}

export const createTaskRequest = (name: string | undefined, description: string | undefined,
    userId: number | undefined, status: taskStatus | undefined, createAt: string) => {
    return new Promise((resolve, reject) => {
        con.query(`INSERT INTO task(name, description, user_id, status, created_at)
        VALUES('${name}', '${description}', '${userId}', '${status}', '${createAt}')`, (err, rows, fields) => {
            if (rows) {
                resolve(rows)
            }
            else {
                reject(err)
            }
        }
        )
    })
}

export const getTasksRequest = (userId: number | undefined) => {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM task WHERE user_id = ${userId}`, (err, rows, fields) => {
            if (rows) {
                resolve(JSON.stringify(rows))
            }
            else {
                reject(err)
            }
        })
    })
}

export const updateTaskByIdRequest = (id: string, description: string | undefined) => {
    return new Promise((resolve, reject) => {
        const updatedAt = new Date()
        con.query(`UPDATE task SET
        description = '${description}',
        updated_at = '${updatedAt.toISOString().split('T')[0]}'
        WHERE id = ${id}
        `, (err, rows, fields)=>{
            if(!err){
                resolve(rows)
            }
            reject(err)
        })
    })
}

export const deleteTaskRequest = (id: string) => {
    return new Promise((resolve, reject) => {
        con.query(`DELETE FROM task WHERE id = ${id}`, (err, rows, fields) => {
            if (!err) {
                resolve(rows)
            }
            reject(err)
        })
    })
}

export const findTask = (req: IUserRequest) =>{
    return new Promise((resolve, reject)=>{
        con.query(`SELECT * FROM task WHERE user_id=${req.user?.id}`, (err, rows)=>{
            if(!err){
                resolve(rows)
            }
            reject(err)
        })
    })
}

/* export const findCurentUser = () =>{
    return new Promise((resolve, reject)=>{
        
    })
}
 */

export const updateTaskStatusRequest = (id:string, status: string)=>{
    return new Promise((resolve, reject) =>{
        con.query(`UPDATE task SET status = '${status}' WHERE id = ${id}`, (err, rows)=>{
            if(!err){
                resolve(rows)
            }
            reject(err)
        })
    })
}