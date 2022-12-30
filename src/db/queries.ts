import { unHashPassword } from "utils/helpers"
import { con } from "./dbconnect"

export const findUserByEmail = (email:string) =>{
    return new Promise((resolve, reject)=>{
        con.query(`SELECT * FROM user WHERE email = '${email}`, (err, rows, fields)=>{
            if(rows.length > 0){
                resolve(rows)
            }
            reject(err)
        })
    })
}

export const findUserByEmailAndPassword = (email: string, password:string)=>{
    return new Promise((resolve, reject)=>{
        con.query(`SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`, (err, rows, fields)=>{
            if(rows.length > 0){
                resolve(rows[0])
            }
            reject("user does not exist")
        })
    })
}