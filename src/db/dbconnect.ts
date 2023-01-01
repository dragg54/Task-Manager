import mysql from "mysql"
import {env} from "process"

let host = env.HOST
let user = env.USER
let password = env.PASSWORD
let database = env.DATABASE
export const con = mysql.createConnection({
    host,
    user,
    password,
    database
})



export const connectDb = async() => {
    con.connect((err)=>{
        if(!err) console.log("db connected")
    })
}