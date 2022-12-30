import { con } from "./dbconnect"

export const findUserByEmail = (email:string) =>{
    return new Promise((resolve, reject)=>{
        con.query(`SELECT * FROM user WHERE email = '${email}'`, (err, rows, fields)=>{
            if(rows){
                resolve(JSON.stringify(rows[0]))
            }
            reject(err)
        })
    })
}
