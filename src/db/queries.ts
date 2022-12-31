import { con } from "./dbconnect"
import { taskStatus } from "../types/status"

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

export const createUserRequest = (firstName: string, lastName: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
        con.query(`INSERT INTO task(first_name, last_name, email, password)
        VALUES('${firstName}', '${lastName}', '${email}', '${password}',)`, (err, rows, fields) => {
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

export const createTaskRequest = (name: string | undefined, description: string | undefined, userId: number, status: taskStatus | undefined, createAt: string) => {
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

export const getTasksRequest = (userId: number)=>{
    return new Promise((resolve, reject)=>[
        con.query(`SELECT * FROM task WHERE user_id = ${userId}`, (err, rows, fields)=>{
            if(rows){
                resolve(JSON.stringify(rows))
            }
            else{
                reject(err)
            }
        })
    ])
}
