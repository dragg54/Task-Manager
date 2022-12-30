import { con } from "./dbconnect"

export const findUserByEmail = (email:string) =>{
    return new Promise((resolve, reject)=>{
        con.query(`SELECT * FROM user WHERE email = '${email}`, (err, rows, fields)=>{
            if(rows.length < 1){
                resolve
            }
            reject("user already exists")
        })
    })
}